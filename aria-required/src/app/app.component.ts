import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'a new user';
  firstName: any;
  
  
  tooltipAlert: boolean = false;
  isMouseOver: boolean = false;
  isInFocus: boolean = false;

  checkEmpty(text: string) {
    console.log(this.firstName.value.length);

    this.firstName = text;
    if (this.firstName.length === 0) {
      this.tooltipAlert = true;
    } else {
      this.tooltipAlert = false;
    }
  }

  tooltipMouseover = () => {
    // this.isMouseOver = true;
	this.isInFocus = false;
  }

  tooltipMouseleave = () => {
    this.isMouseOver = false;
  }

  tooltipFocus = () => {
    this.isInFocus = true;
  }

  tooltipBlur = () => {
    this.isInFocus = false;
  }
  
  clickOutside(event) {
	 this.isInFocus = true;
  }
}
