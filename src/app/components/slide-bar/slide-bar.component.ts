import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ChartComponent} from "../chart/chart.component";

@Component({
  selector: 'slide-bar',
  imports: [FormsModule, SliderModule, NgClass, ButtonModule],
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})

export class SlideBarComponent {

  @Output() changeHandler: EventEmitter<void> = new EventEmitter();

  onChange() {
    this.changeHandler.emit();
  }

  value!: number;

  getValue() {
    return this.value;
  }

  protected readonly ChartComponent = ChartComponent;
}

