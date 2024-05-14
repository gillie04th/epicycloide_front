import {Component, Input} from '@angular/core';

@Component({
  selector: 'card-modele-predefini',
  standalone: true,
  imports: [],
  templateUrl: './card-modele-predefini.component.html',
  styleUrl: './card-modele-predefini.component.css'
})
export class CardModelePredefiniComponent {
  @Input() pathImg: string | undefined ;
  @Input() titleModele: string | undefined;
}
