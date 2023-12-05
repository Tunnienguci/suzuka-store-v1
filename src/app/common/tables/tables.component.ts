import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'src/app/models/table';

@Component({
  selector: 'szk-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  @Input() thead: Table[] = [];
  @Input() tbody: any = [];
  @Output() actionTable = new EventEmitter();
  constructor() {}

  btnFunction(e: any, data: any, action: any) {
    this.actionTable.emit({ e, data, action });
  }
}
