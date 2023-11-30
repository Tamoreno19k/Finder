import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.scss'],
})
export class HelpSupportComponent  {
  @ViewChild('popover') popover: any;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}
