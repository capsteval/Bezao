import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PartOne';
  menuBar: boolean = false;
  OpenMenuBar() {
    this.menuBar = true;
  }
  CloseMenuBar() {
    this.menuBar = false;
  }
}
