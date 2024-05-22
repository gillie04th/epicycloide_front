import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {ChartComponent} from "../chart/chart.component";
import {Chart} from "chart.js";

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
  @Output() backwardHandler: EventEmitter<void> = new EventEmitter();
  @Output() forwardHandler: EventEmitter<void> = new EventEmitter();
  @Output() playHandler: EventEmitter<void> = new EventEmitter();
  @Output() pauseHandler: EventEmitter<void> = new EventEmitter();

  onChange() {
    this.changeHandler.emit();
  }

  onBackward() {
    this.backwardHandler.emit();
  }

  onForward() {
    this.forwardHandler.emit();
  }

  onPlay() {
    this.playHandler.emit();
  }

  onPause() {
    this.pauseHandler.emit();
  }

  value: number | undefined;

  getValue() {
    return this.value ? this.value : 0;
  }

  setValue(value: number) {
    if(value <= ChartComponent.nbPoints) {
      this.value = value;
    } else if(value < 0) {
      this.value = 0;
    } else {
      this.value = value - ChartComponent.nbPoints;
    }
  }

  protected readonly ChartComponent = ChartComponent;
}

