import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: ` <button class="btn">Hello World</button> `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {}
