import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";


@Component({
  selector: 'button-icon',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './button-with-icon.component.html',
  styleUrl: './button-with-icon.component.css'
})
export class ButtonWithIconComponent {
  onClickHandler() {
    console.log('Button Icon clicked');
  }
}
