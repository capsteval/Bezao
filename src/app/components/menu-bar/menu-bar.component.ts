import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Output() closeBar = new EventEmitter();
  @Input() isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  Close() {
    this.closeBar.emit();
  }
}
