import {Component, OnInit, OnDestroy, Input, numberAttribute} from '@angular/core';
import {ApiService} from "../../services/ApiService";
import {Subscription} from 'rxjs';
import {ChartModule} from "primeng/chart";
import {Chart} from "chart.js";
import {EpicycloidModel} from "../../models/epicycloid.model";

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  standalone: true,
  imports: [
    ChartModule
  ],
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {

  public static nbPoints: number = 5000;

  @Input({transform: numberAttribute}) id: number = 0;
  @Input() nameEpicycloid: string = "epicycloidChart"

  public chart: any;
  public data: any[] | null;
  private subscription: Subscription | null;

  constructor(private apiService: ApiService) {
    this.data = null;
    this.subscription = null;
  }

  ngOnInit(): void {
    this.requestData();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public requestData(epicycloid: EpicycloidModel | null = null) {
    if (this.id != 0) {
      this.subscription = this.apiService.getEpicycloidCoordinatesById(this.id, 720).subscribe(data => {
        this.data = this.prepareChartData(data);
        this.createChart();
      });
    } else {
      if (epicycloid) {
        this.subscription = this.apiService.getEpicycloidCoordinates(<EpicycloidModel>epicycloid, ChartComponent.nbPoints).subscribe(data => {
          this.data = this.prepareChartData(data);
          this.createChart();
        });
      }
    }
  }

  prepareChartData(data: any[]): any[] {
    return data.sort((a, b) => a.t - b.t).map(item => ({x: item.x, y: item.y}));
  }

  prepareChartsOptions() {
    return {
      aspectRatio: 1,
      scales: {
        x: {
          grid: {
            lineWidth: 0,
            color: "rgba(0, 0, 0, 0)",
          },
          border: {
            width: this.id == 0 ? 1 : 0,
          },
          ticks: {
            display: this.id == 0,
          }
        },
        y: {
          grid: {
            lineWidth: 0,
            color: "rgba(0, 0, 0, 0)",
          },
          border: {
            width: this.id == 0 ? 1 : 0,
          },
          ticks: {
            display: this.id == 0,
          }
        }
      },
      elements: {
        point: {
          radius: 0,
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        }
      }
    };
  }

  public createChart( limit: number = ChartComponent.nbPoints): void {
    if (!this.chart) {
      this.chart = new Chart(this.nameEpicycloid, {
        type: 'scatter',
        data: {
          datasets: [{
            data: this.data?.slice(0, limit),
            borderColor: 'rgb(229,67,67)',
            showLine: true,
            tension: 0.5,
          }]
        },
        options: this.prepareChartsOptions()
      });
    } else {
      this.chart.data.datasets[0].data = this.data?.slice(0, limit);

      if(this.data){
        this.chart.options.scales.x.min = Math.min(...this.data.map(item => item.x)) - 1;
        this.chart.options.scales.x.max = Math.max(...this.data.map(item => item.x)) + 1;
        this.chart.options.scales.y.min = Math.min(...this.data.map(item => item.y)) - 1;
        this.chart.options.scales.y.max = Math.max(...this.data.map(item => item.y)) + 1;
      }

      this.chart.update('none');
    }
  }
}
