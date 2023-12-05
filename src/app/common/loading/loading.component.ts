import { Component, Input } from '@angular/core';

@Component({
  selector: 'szk-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() loading = false;
  constructor() {}
}
