import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'custom-button',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './button.component.html',
  standalone: true,
  imports: [
    ButtonModule,
    NgStyle
  ],
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() buttonName: any ;

  onClickHandler() {
    console.log('Button clicked');
  }
}
