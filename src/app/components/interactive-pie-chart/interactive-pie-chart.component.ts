import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'interactive-pie-chart',
  templateUrl: './interactive-pie-chart.component.html',
  styleUrls: ['./interactive-pie-chart.component.css']
})
export class InteractivePieChartComponent implements OnChanges {

  @Input()
  data: IPieChartDatum[];

  @Input()
  radius = 130;

  @Input()
  margin = { left: 30, right: 30, top: 30, bottom: 30 };

  private svg: d3.Selection<SVGElement, {}, null, undefined>;
  private cnv: d3.Selection<SVGGElement, {}, null, undefined>;
  private arc: d3.Arc<any, any>;
  private highlightArc: d3.Arc<any, any>;

  constructor(el: ElementRef) {
    // Set up svg root elements
    this.svg = d3.select(el.nativeElement)
      .append('svg');    
    this.cnv = this.svg.append('g');
    
    // Set initial dimensions
    this.updateCanvasDimensions();

    // Create the arc function
    this.arc = d3.arc<InteractivePieChartComponent, IPieChartDatum>()
      .cornerRadius(5)
      .padAngle(0.05)
      .innerRadius(this.radius / 2)
      .outerRadius(this.radius)
      .startAngle(d => d.startAngle)
      .endAngle(d => d.endAngle);

    this.highlightArc = d3.arc<InteractivePieChartComponent, IPieChartDatum>()
      .cornerRadius(5)
      .padAngle(0.05)
      .innerRadius(this.radius / 2 + 5)
      .outerRadius(this.radius + 20)
      .startAngle(d => d.startAngle)
      .endAngle(d => d.endAngle);
  }

  ngOnChanges() {
    this.render();
  }

  render() {
    if (!this.data) {
      return;
    }

    // cache this for later
    let self = this;

    // calculate total
    let total = 0;
    this.data.forEach(d => total += d.amount);
    const amountToRadians = (amount) => {
      return (amount * (Math.PI * 2)) / total;
    };

    // clone each point and add start and end angle info
    let lastPoint = 0;
    let data: IPieChartDatum[] = this.data.map(d => {
      let clone: IPieChartDatum = Object.assign({
        startAngle: amountToRadians(lastPoint),
        endAngle: amountToRadians(lastPoint + d.amount)
      }, d);
      lastPoint += d.amount;
      return clone;
    });

    // BIND/JOIN
    let slice = this.cnv.selectAll('path.slice')
      .data(data, (d: IPieChartDatum) => d.id);
    
    // EXIT
    slice.exit()
      .transition()
      .style('opacity', 0)
      .remove();
    
    // ENTER
    let newSlice = slice.enter()
      .append('path')
      .classed('slice', true)
      .attr('fill', d => {
        console.log(d.color);
        return d.color;
      })
      .attr('d', this.arc)
      .on('mouseenter', function(d) {
        console.log('testing')
        d3.select(this)
          .transition()
          .ease(d3.easeBack)
          .attr('d', self.highlightArc);
      })
      .on('mouseleave', function(d) {
        d3.select(this)
          .transition()
          .ease(d3.easeBack)
          .attr('d', self.arc);
      });

    // MERGE
    slice = newSlice.merge(slice);

    // ENTER+UPDATE
    


  }

  private updateCanvasDimensions() {
    let outerWidth = this.radius * 2 + this.margin.left + this.margin.right;
    let outerHeight = this.radius * 2 + this.margin.top + this.margin.bottom;

    this.svg
      .attr('width', outerWidth)
      .attr('height', outerHeight);

    this.cnv
      .attr('transform', `translate(${outerWidth / 2}, ${outerHeight / 2})`);
  }

}

export interface IPieChartDatum {
  id: any;
  label: string;
  color: string;
  amount: number;
  startAngle?: number;
  endAngle?: number;
}