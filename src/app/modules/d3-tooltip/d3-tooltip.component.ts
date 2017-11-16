import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'd3-tooltip',
  templateUrl: './d3-tooltip.component.html',
  styleUrls: ['./d3-tooltip.component.css']
})
export class D3TooltipComponent implements OnInit {

  @Input()
  component: any;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

}
