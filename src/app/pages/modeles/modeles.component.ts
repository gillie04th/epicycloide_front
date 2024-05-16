import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {CardModelePredefiniComponent} from "../../components/card-modele-predefini/card-modele-predefini.component";
import {ApiService} from "../../services/ApiService";
import {EpicycloidModel} from "../../models/epicycloid.model";
import {ChartComponent} from "../../components/chart/chart.component";

@Component({
  selector: 'app-modeles',
  standalone: true,
  imports: [
    HeaderComponent,
    CardModelePredefiniComponent,
    ChartComponent
  ],
  templateUrl: './modeles.component.html',
  styleUrl: './modeles.component.css'
})
export class ModelesComponent {
  constructor(private apiService: ApiService) { }

  epicycloids: EpicycloidModel[] = [];

  ngOnInit(): void{
    this.apiService.getAllEpicycloid().subscribe(
      (data: EpicycloidModel[]) => {
        this.epicycloids = data;
      }
    )
  }
}
