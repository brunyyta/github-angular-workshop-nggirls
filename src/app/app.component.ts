import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <html>
    <h1>Welcome to {{title}}</h1>
  </html>
  <app-input-button-unit></app-input-button-unit>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
}
