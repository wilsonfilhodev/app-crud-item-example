import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css'],
  providers: [MessageService]
})

export class ItemSearchComponent implements OnInit {

    items = [];

    constructor(private itemService: ItemService) { }

    ngOnInit() {

        this.itemService.getItems()
            .then(items => this.items = items);
    }

}
