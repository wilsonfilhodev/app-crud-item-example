import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    items: any[];

    constructor () { }

    async create(item: any) {
        this.getItems();
        item.id = new Date().getTime();
        this.items.push(item);
        await localStorage.setItem('@appItem', JSON.stringify(this.items));
        return console.log('Item created: ', item);
    }

    async delete(idItem) {
        this.getItems();
        const itemsFiltered = this.items.filter( item => Number(item.id) !== Number(idItem));
        await localStorage.setItem('@appItem', JSON.stringify(itemsFiltered));
        return console.log('Deleted item id: ', itemsFiltered);
    }

    async update(item) {
        this.getItems();
        this.items.map( itemStorage => {
            if (itemStorage.id === item.id) {
                itemStorage = item;
            }
        });
        await localStorage.setItem('@appItem', JSON.stringify(this.items));
        return console.log('Update item: ', item);
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
