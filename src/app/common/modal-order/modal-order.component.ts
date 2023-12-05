import { Component, Input } from '@angular/core';

@Component({
  selector: 'szk-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.scss'],
})
export class ModalOrderComponent {
  @Input() payload: any;
  @Input() modalSettings: any;
}
