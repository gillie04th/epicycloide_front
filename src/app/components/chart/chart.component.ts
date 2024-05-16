import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {ApiService} from "../../services/ApiService";
import {Subscription} from 'rxjs';
import {ChartModule} from "primeng/chart";
import {Chart} from "chart.js";

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

  @Input() id: string = "1";
  @Input() nameEpicycloid: string = "epicycloidChart"

  constructor(private apiService: ApiService) {
    this.data = null;
    this.subscription = null;
  }

  ngOnInit(): void {
    let num: number = +this.id;
    this.subscription = this.apiService.getEpicycloidCoordinates(num, 5000).subscribe(data => {
      this.data = this.prepareChartData(data);
      this.createChart();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  prepareChartData(data: any[]): any[] {
    return data.sort((a,b) => a.t - b.t).map(item => ({x: item.x, y: item.y}));
  }

  createChart(): void {
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
          },
          y: {
            grid: {
              lineWidth: 0,
              color: "rgba(0, 0, 0, 0)",
            },
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
}
