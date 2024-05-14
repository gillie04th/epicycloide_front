import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-explication',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './explication.component.html',
  styleUrl: './explication.component.css'
})
export class ExplicationComponent {

}
