import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Output() showMenu: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    toggle() {
          this.showMenu.emit();
      }
}
