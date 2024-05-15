import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {SlideBarComponent} from "../../components/slide-bar/slide-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
