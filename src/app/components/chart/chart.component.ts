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

  public chart: any;
  public data: any[] | null;
  private subscription: Subscription | null;

  @Input({transform: numberAttribute}) id: number = 0;
  @Input() nameEpicycloid: string = "epicycloidChart"


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

  requestData(epicycloid: EpicycloidModel | null = null)  {
    if (this.id != 0) {
      this.subscription = this.apiService.getEpicycloidCoordinatesById(this.id, 720).subscribe(data => {
        this.data = this.prepareChartData(data);
        this.createChart();
      });
    } else {
      this.subscription = this.apiService.getEpicycloidCoordinates(<EpicycloidModel>epicycloid, 5000).subscribe(data => {
        this.data = this.prepareChartData(data);
        this.createChart();
      });
    }
  }

  prepareChartData(data: any[]): any[] {
    return data.sort((a, b) => a.t - b.t).map(item => ({x: item.x, y: item.y}));
  }

  public createChart(): void {
    this.chart = new Chart(this.nameEpicycloid, {
      type: 'scatter',
      data: {
        datasets: [{
          data: this.data,
          borderColor: 'rgb(229,67,67)',
          showLine: true,
          tension: 0.5,
        }]
      },
      options: {
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
      }
    });
  }

  regenerateChart(epicycloid : EpicycloidModel | null = null) : void {
    if(this.chart) {
      this.chart.destroy();
    }
    this.requestData(epicycloid);
  }
}
