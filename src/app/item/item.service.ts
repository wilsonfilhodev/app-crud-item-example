import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    items: any[];

    constructor () { }

    async create(item: any) {
        this.getItems().then( items => {
            item.id = new Date().getTime();
            items.push(item);
            localStorage.setItem('@appItem', JSON.stringify(items));
            return console.log('Item created: ', item);
        });
    }

    async delete(idItem) {
        this.getItems().then( items => {
            const itemsFiltered = items.filter( item => Number(item.id) !== Number(idItem));
            localStorage.setItem('@appItem', JSON.stringify(itemsFiltered));
            return console.log('Deleted item id: ', itemsFiltered);
        });
    }

    async update(item) {
        this.getItems().then( items => {
            items.map( itemStorage => {
                if (itemStorage.id === item.id) {
                    itemStorage = item;
                }
            });
            localStorage.setItem('@appItem', JSON.stringify(items));
            return console.log('Update item: ', item);
        });
    }

    async getItems() {
        this.items = [];
        const itemsStorage = await localStorage.getItem('@appItem');
        if (itemsStorage) {
            this.items = JSON.parse(itemsStorage);
        }
        return this.items;
    }
}
