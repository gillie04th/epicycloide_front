import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ParametreCercleComponent} from "../../components/parametre-cercle/parametre-cercle.component";
import {ChartComponent} from "../../components/chart/chart.component";
import {SlideBarComponent} from "../../components/slide-bar/slide-bar.component";
import {ButtonComponent} from "../../components/button/button.component";
import {Epicycloid, EpicycloidModel} from "../../models/epicycloid.model";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/ApiService";

@Component({
  imports: [
    HeaderComponent,
    ParametreCercleComponent,
    ChartComponent,
    SlideBarComponent,
    ButtonComponent
  ],
  selector: 'app-creation',
  standalone: true,
  styleUrl: './creation.component.css',
  templateUrl: './creation.component.html'
})
export class CreationComponent implements OnInit {

  @ViewChild(ChartComponent) chartComponent: ChartComponent | undefined;
  epicycloids: Array<EpicycloidModel> = new Array<EpicycloidModel>();

  idChart: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  addEpicycloid () {
    this.epicycloids.push(new Epicycloid(0, 0));
    // console.log(this.epicycloids);
  }

  ngOnInit() {
    this.idChart  = this.route.snapshot.paramMap.get('id');
    if(this.idChart == null){
      this.addEpicycloid();
    }
    else{
      this.addModele(this.idChart);
    }
  }

  removeEpicycloid() {
    if(this.epicycloids.length > 1){
      this.epicycloids.pop();
    }
    // console.log(this.epicycloids);
  }

  generatePoints() {
    let epicycloid: EpicycloidModel = this.epicycloids[0];

    let rolling: EpicycloidModel | undefined = undefined;

    this.epicycloids.slice().reverse().forEach((e: EpicycloidModel) => {
      if(e !== epicycloid) {
        e.rolling = rolling ? rolling : undefined;
        rolling = e;
      }
    })

    epicycloid.rolling = rolling;

    this.chartComponent?.regenerateChart(epicycloid)

  }

  addModele(idChart: string){
    let idChartNb: number = +idChart;

    this.apiService.getEpicycloidById(idChartNb).subscribe(
      (epicycloid: EpicycloidModel) => {
        this.chartComponent?.requestData(epicycloid)
        while(epicycloid.rolling != undefined){
          this.epicycloids.push(new Epicycloid(epicycloid.radius, epicycloid.frequency));
          epicycloid = epicycloid.rolling;
        }
        this.epicycloids.push(new Epicycloid(epicycloid.radius, epicycloid.frequency));
      }
    )
  }
}
