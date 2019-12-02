import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  @Input()
  state = {};

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes['state']) {
      this.state = JSON.parse(changes['state'].currentValue);
      console.log(this.state);
    }
  }
}
