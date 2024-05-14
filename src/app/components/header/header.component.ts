import {NgModule, ViewEncapsulation} from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "header-component",
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent],
})
export class MyComponentModule {}
