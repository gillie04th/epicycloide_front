import {Component, ViewEncapsulation} from '@angular/core';
import {SliderModule} from "primeng/slider";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'slide-bar',
  imports: [FormsModule, SliderModule, NgClass, ButtonModule],
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})

export class SlideBarComponent {
  value!: number;
}

