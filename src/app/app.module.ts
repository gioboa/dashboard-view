import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define(
      "dashboard-view",
      createCustomElement(AppComponent, { injector })
    );
  }

  ngDoBootstrap() {}
}
