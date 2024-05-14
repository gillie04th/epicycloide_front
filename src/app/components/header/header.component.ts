import {NgModule, ViewEncapsulation} from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";
import {RouterLink} from "@angular/router";
import {ExplicationComponent} from "../../pages/explication/explication.component";

@Component({
  selector: "header-component",
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  protected readonly MyComponentModule = MyComponentModule;
  protected readonly ExplicationComponent = ExplicationComponent;
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent],
})

export class MyComponentModule {

}
