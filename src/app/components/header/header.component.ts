import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() openBar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  OpenMenuBar() {
    console.log('clicked from ');
    this.openBar.emit();
  }
}
