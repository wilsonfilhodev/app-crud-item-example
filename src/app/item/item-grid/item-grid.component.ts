import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-item-grid',
    templateUrl: './item-grid.component.html',
    styleUrls: ['./item-grid.component.css']
})
export class ItemGridComponent implements OnInit {

    @Input() items = [];

    constructor() { }

    ngOnInit() {
    }

}
