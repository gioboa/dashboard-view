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
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: 100,
            min: 0
          }
        }
      ]
    }
  };
  chartData = [{ data: [], fill: false, label: 'CPU' }];
  chartLabels = [];

  ngOnInit() {
    this.tapData();
    this.tapData();
    this.tapData();
    this.tapData();
    interval(2000).subscribe(() => this.tapData());
  }

  private tapData() {
    const labels = [...this.chartLabels];
    const data = [...this.chartData[0].data];
    if (labels.length === 10) {
      labels.shift();
      data.shift();
    }
    labels.push(new Date().toLocaleTimeString());
    data.push(Math.random() * 50 + 20);
    this.chartLabels = [...labels];
    this.chartData[0].data = data;
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
