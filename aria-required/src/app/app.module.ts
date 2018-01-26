import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


// class tooltipFocus {
    // tooltip: string;
    // constructor (obj: string) {
    // let tooltip = document.getElementById("tooltip");
    // this.tooltip.innerHTML =;
    // this.tooltip.style.display = "block";
    // this.tooltip.style.top = obj.offsetTop - tooltip.offsetHeight + "px";
    // this.tooltip.style.left = obj.offsetLeft + "px";
   // }
// }
// class tooltipMouse {
    // tooltip: string;
    // constructor(obj: string) {
    // let tooltip = document.getElementById("tooltip");
    // this.tooltip.style.display = "none";
    // this.tooltip.style.top = "-9999px";
    // this.tooltip.style.left = "-9999px";
  // }
 
}
