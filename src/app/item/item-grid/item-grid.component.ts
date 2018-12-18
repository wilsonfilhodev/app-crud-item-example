import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-item-grid',
    templateUrl: './item-grid.component.html',
    styleUrls: ['./item-grid.component.css']
})
export class ItemGridComponent implements OnInit {

    @Input() items = [];

    @Output() delete = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    handleDelete(item) {
        this.delete.emit(item);
    }
}
