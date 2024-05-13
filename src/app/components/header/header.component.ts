import {NgModule, ViewEncapsulation} from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "hearder-component",
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeederComponent {}

@NgModule({
  declarations: [],
  imports: [CommonModule, HeederComponent],
  exports: [HeederComponent],
})
export class MyComponentModule {}
