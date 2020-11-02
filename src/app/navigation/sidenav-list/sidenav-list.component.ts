import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() onCloseEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.onCloseEvent.emit();
  }
}
