import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild(SlideBarComponent) slideBarComponent: SlideBarComponent | undefined;
  epicycloids: Array<EpicycloidModel> = new Array<EpicycloidModel>();

  idChart: string | null = null;
  playing: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    this.idChart = this.route.snapshot.paramMap.get('id');
    if (this.idChart == null) {
      this.addEpicycloid();
    } else {
      this.addModele(this.idChart);
    }
  }

  addEpicycloid() {
    this.epicycloids.push(new Epicycloid(0, 0, 0));
    // console.log(this.epicycloids);
  }

  removeEpicycloid() {
    if (this.epicycloids.length > 1) {
      this.epicycloids.pop();
    }
    // console.log(this.epicycloids);
  }

  generatePoints() {
    let epicycloid: EpicycloidModel = this.epicycloids[0];

    let rolling: EpicycloidModel | undefined = undefined;

    this.epicycloids.slice().reverse().forEach((e: EpicycloidModel) => {
      if (e !== epicycloid) {
        e.rolling = rolling ? rolling : undefined;
        rolling = e;
      }
    })

    epicycloid.rolling = rolling;

    this.chartComponent?.requestData(epicycloid)
  }

  stepView() {
    this.chartComponent?.createChart(this.slideBarComponent?.getValue());
  }

  addModele(idChart: string) {
    let idChartNb: number = +idChart;

    this.apiService.getEpicycloidById(idChartNb).subscribe(
      (epicycloid: EpicycloidModel) => {
        this.chartComponent?.requestData(epicycloid)
        while (epicycloid.rolling != undefined) {
          this.epicycloids.push(new Epicycloid(epicycloid.radius, epicycloid.frequency, epicycloid.phase));
          epicycloid = epicycloid.rolling;
        }
        this.epicycloids.push(new Epicycloid(epicycloid.radius, epicycloid.frequency, epicycloid.phase));
      }
    )
  }

  backward() {
    this.slideBarComponent?.setValue(this.slideBarComponent?.getValue() - ChartComponent.nbPoints * 2 / 100);
    this.chartComponent?.createChart(this.slideBarComponent?.getValue())
  }

  forward() {
    this.slideBarComponent?.setValue(this.slideBarComponent?.getValue() + ChartComponent.nbPoints * 2 / 100);
    this.chartComponent?.createChart(this.slideBarComponent?.getValue())
  }

  async play() {

    this.playing = true;

    while (this.playing && this.slideBarComponent && this.slideBarComponent?.getValue() < ChartComponent.nbPoints) {
      this.slideBarComponent?.setValue(this.slideBarComponent?.getValue() + 5);
      await new Promise(resolve => setTimeout(resolve, 1));
      this.stepView();
    }

    this.playing = false;
    if (this.slideBarComponent && this.slideBarComponent?.getValue() == ChartComponent.nbPoints) {
      this.slideBarComponent ? this.slideBarComponent.setValue(0) : null;
    }
  }

  pause() {
    this.playing = false;
  }

}
