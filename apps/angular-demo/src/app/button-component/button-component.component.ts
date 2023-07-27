import { Component } from "@angular/core";

@Component({
  selector: "abgov-button-component",
  templateUrl: "./button-component.component.html",
  styleUrls: ["./button-component.component.css"],
})
export class ButtonComponentComponent {
  checkbox1Checked = false;
  isMobile = window.matchMedia("(any-pointer:coarse)").matches;
  constructor() { }

  onClick() {
    console.log("clicked");
  }

  onInputChangeEvent(e: Event) {
    console.log("Event: ", e);
  }

  onChange() {
    this.checkbox1Checked = !this.checkbox1Checked;
  }
}
