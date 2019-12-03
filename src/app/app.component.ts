import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  @Input()
  state: any = {};

  colors = [
    {
      fillColor: 'rgba(47, 132, 71, 0)',
      strokeColor: 'rgba(47, 132, 71, 0.8)',
      highlightFill: 'rgba(47, 132, 71, 0.8)',
      highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }
  ];
  chartOptions = {
    responsive: true
  };
  chartData = [{ data: [], label: 'CPU' }];
  chartLabels = [];

  ngOnInit() {
    let date = new Date();
    date.setSeconds(date.getSeconds() - 5);
    this.pushLabel(date);
    this.chartData[0].data.push(Math.random() * 200 + 20);
    date = new Date();
    this.pushLabel(date);
    this.chartData[0].data.push(Math.random() * 200 + 20);
    interval(5000).subscribe(() => {
      const arr = [...this.chartLabels];
      if (arr.length === 10) {
        arr.shift();
        this.chartData[0].data.shift();
      }
      const date = new Date();
      arr.push(`${date.getMinutes()}:${date.getSeconds()}`);
      this.chartData[0].data.push(Math.random() * 200 + 20);
      this.chartLabels = [...arr];
    });
  }

  private pushLabel(date: Date) {
    this.chartLabels.push(`${date.getMinutes()}:${date.getSeconds()}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes['state']) {
      this.state = JSON.parse(changes['state'].currentValue);
      console.log(this.state);
    }
  }

  onChartClick(event) {
    this.chartLabels.push('abc');
  }
}
