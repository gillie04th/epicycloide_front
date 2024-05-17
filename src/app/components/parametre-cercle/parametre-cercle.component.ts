import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {EpicycloidModel} from "../../models/epicycloid.model";

@Component({
  selector: 'parametre-cercle',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './parametre-cercle.component.html',
  styleUrl: './parametre-cercle.component.css'
})
export class ParametreCercleComponent implements OnInit {

  @Input() epicycloid: EpicycloidModel | any;
  @Output('epicycloidChange') emitter: EventEmitter<EpicycloidModel> = new EventEmitter<EpicycloidModel>();

  ngOnInit(): void {
  }
}
