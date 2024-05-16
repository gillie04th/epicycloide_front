import {Component, Input} from '@angular/core';
import {ChartComponent} from "../chart/chart.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'card-modele-predefini',
  standalone: true,
  imports: [
    ChartComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './card-modele-predefini.component.html',
  styleUrl: './card-modele-predefini.component.css'
})

export class CardModelePredefiniComponent {
  @Input() idChart: string | undefined ;
  @Input() titleModele: string | undefined = "test";

}
