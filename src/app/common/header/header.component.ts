import { Component } from '@angular/core';

@Component({
  selector: 'szk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  greeting: string = '';
  constructor() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const time = `${hour}:${minute}:${second}`;
    const greeting =
      hour < 12
        ? 'Chào Buổi Sáng'
        : hour < 18
        ? 'Chào Buổi Chiều'
        : 'Chào Buổi Tối';
    this.greeting = `${greeting} !`;
  }
}
