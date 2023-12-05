import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'szk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalSetting = {
    modalName: '',
    size: '',
    modalTitle: '',
    btnSave: 'Đóng',
    btnClose: 'Lưu',
    type: 'product',
    data: {},
  };

  @Output() modalData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  public closeModal() {
    this.modalData.emit({ returnData: false });
  }

  public saveModal() {
    this.modalData.emit({ returnData: true });
  }
}
