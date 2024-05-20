import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {ChartComponent} from "../../components/chart/chart.component";
import {SlideBarComponent} from "../../components/slide-bar/slide-bar.component";
import {SliderModule} from "primeng/slider";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-dessin',
  standalone: true,
  imports: [
    ButtonComponent,
    ChartComponent,
    SlideBarComponent,
    SliderModule,
    PaginatorModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dessin.component.html',
  styleUrl: './dessin.component.css'
})


export class DessinComponent implements AfterViewInit {
  value!: number;

  @ViewChild('canvas', { static: false })  canvas: ElementRef<HTMLCanvasElement> | any;
  private ctx: CanvasRenderingContext2D | any;
  private drawing = false;


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
  }
}
