import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {NgStyle} from "@angular/common";
import {Router} from "@angular/router";

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
  @Input() disabled: boolean = false;
  @Output() clickHandler: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.clickHandler.emit();
  }
}
