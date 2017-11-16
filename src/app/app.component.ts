import { Component } from '@angular/core';
import { IPieChartDatum } from './components/interactive-pie-chart/interactive-pie-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pieData: IPieChartDatum[] = [
    {
      id: 1,
      label: 'Foo',
      color: 'gold',
      amount: 35
    },
    {
      id: 2,
      label: 'Bar',
      color: 'steelblue',
      amount: 45
    },
    {
      id: 3,
      label: 'Baz',
      color: 'indianred',
      amount: 20
    }
  ];
}
