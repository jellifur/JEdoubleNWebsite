import { Component } from "@angular/core";
import { CORE_DIRECTIVES } from "@angular/common";

import { DROPDOWN_DIRECTIVES } from "ng2-bootstrap";

@Component({
  selector: "app-root",
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  styleUrls: ["../css/app.css"],
  templateUrl: "../html/app.component.html"
})

export class AppComponent { 
    status:{isopen:boolean} = {isopen: false};tructor() {}

    constructor() {}

    toggleDropdown($event:MouseEvent):void {
      $event.preventDefault();
      $event.stopPropagation();
      this.status.isopen = !this.status.isopen;
  }
}
