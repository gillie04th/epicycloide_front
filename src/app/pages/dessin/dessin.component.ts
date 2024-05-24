import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {ChartComponent} from "../../components/chart/chart.component";
import {SliderModule} from "primeng/slider";
import {PaginatorModule} from "primeng/paginator";
import {Point} from "../../models/point.model";
import {ButtonComponent} from "../../components/button/button.component";
import {ApiService} from "../../services/ApiService";
import {EpicycloidModel} from "../../models/epicycloid.model";

@Component({
  selector: 'app-dessin',
  standalone: true,
  imports: [
    ButtonComponent,
    ChartComponent,
    SliderModule,
    PaginatorModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dessin.component.html',
  styleUrl: './dessin.component.css'
})


export class DessinComponent implements AfterViewInit {
  value: number = 1;
  tabPoint: Point[] = [];
  equation!: string;
  txt_equation: string = "Formule : ";

  @ViewChild('canvas', {static: false}) canvas: ElementRef<HTMLCanvasElement> | any;
  @ViewChild(ChartComponent) chartComponent: ChartComponent | undefined;
  @ViewChild('zoneDessin') zoneDessin: ElementRef | undefined;
  private ctx: CanvasRenderingContext2D | any;
  private drawing = false;

  constructor(private apiService: ApiService) {
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
  }

  onMouseDown(event: MouseEvent) {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
  }

  onMouseMove(event: MouseEvent) {
    if (this.drawing) {
      this.ctx.lineTo(event.offsetX, event.offsetY);
      this.tabPoint.push(new Point(event.offsetX, event.offsetY))
      this.ctx.stroke();
    }
  }

  onMouseUp() {
    this.drawing = false;
    this.ctx.closePath();
  }

  onMouseLeave() {
    this.drawing = false;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.tabPoint = [];
  }

  goEpicycloid() {
    this.apiService.getTransformation(this.tabPoint, this.value).subscribe(
      res => {
        console.log(res);
        this.generatePoints(res);
      }
    )
  }

  generatePoints(epicycloid: EpicycloidModel) {

    let rolling: EpicycloidModel | undefined = undefined;

    this.chartComponent?.requestData(epicycloid);
  }
}
