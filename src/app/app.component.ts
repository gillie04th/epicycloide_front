import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";
import {ButtonModule} from "primeng/button";
import {ButtonWithIconComponent} from "./components/button-with-icon/button-with-icon.component";
import {MyComponentModule} from "./components/header/header.component";
import {SlideBarComponent} from "./components/slide-bar/slide-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ButtonModule, ButtonWithIconComponent, MyComponentModule, SlideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Front';
}
