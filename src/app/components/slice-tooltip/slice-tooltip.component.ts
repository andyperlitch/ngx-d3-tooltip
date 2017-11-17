import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPieChartDatum } from '../interactive-pie-chart/interactive-pie-chart.component'

@Component({
  selector: 'slice-tooltip',
  templateUrl: './slice-tooltip.component.html',
  styleUrls: ['./slice-tooltip.component.css']
})
export class SliceTooltipComponent {

  @Input()
  slice: IPieChartDatum;

  @Output()
  select = new EventEmitter<IPieChartDatum>();

  onSliceSelect() {
    this.select.emit(this.slice);
  }

}
