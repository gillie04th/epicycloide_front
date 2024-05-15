import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {ParametreCercleComponent} from "../../components/parametre-cercle/parametre-cercle.component";
import {ChartComponent} from "../../components/chart/chart.component";
import {SlideBarComponent} from "../../components/slide-bar/slide-bar.component";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-creation',
  standalone: true,
  imports: [
    HeaderComponent,
    ParametreCercleComponent,
    ChartComponent,
    SlideBarComponent,
    ButtonComponent
  ],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css'
})
export class CreationComponent {

}
