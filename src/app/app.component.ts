import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";
import {ButtonModule} from "primeng/button";
import {ButtonWithIconComponent} from "./components/button-with-icon/button-with-icon.component";
import {MyComponentModule} from "./components/header/header.component";
import {SlideBarComponent} from "./components/slide-bar/slide-bar.component";
import {HomeComponent} from "./pages/home/home.component";
import {ExplicationComponent} from "./pages/explication/explication.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ButtonModule, ButtonWithIconComponent, MyComponentModule, SlideBarComponent, HomeComponent, ExplicationComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pépïd';
}
