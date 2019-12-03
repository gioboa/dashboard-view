import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';

const chart = Chart;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartsModule],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define('dashboard-view', createCustomElement(AppComponent, { injector }));
  }

  ngDoBootstrap() {}
}
