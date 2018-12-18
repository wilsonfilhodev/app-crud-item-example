import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    items: any[];

    constructor () { }

    async save(item: any) {
        if (item.id) {
            this.update(item);
        } else {
            this.create(item);
        }
    }

    async create(item: any) {
        let items = [];
        const itemsStorage = await localStorage.getItem('@appItem');
        if (itemsStorage) {
            items = JSON.parse(itemsStorage);
        }
        item.id = new Date().getTime();
        items.push(item);
        localStorage.setItem('@appItem', JSON.stringify(items));
    }

    async delete(idItem) {
        const itemsStorage = await localStorage.getItem('@appItem');
        const items = JSON.parse(itemsStorage);
        const itemsFiltered = items.filter( item => item.id !== Number(idItem));
        localStorage.setItem('@appItem', JSON.stringify(itemsFiltered));
    }

    async update(item) {
        let items = [];
        const itemsStorage = await localStorage.getItem('@appItem');
        if (itemsStorage) {
            items = JSON.parse(itemsStorage);
        }
        items.map( (itemStorage, index) => {
            if (itemStorage.id === Number(item.id)) {
                items[index] = item;
            }
        });
        localStorage.setItem('@appItem', JSON.stringify(items));
    }

    async getItems() {
        this.items = [];
        const itemsStorage = await localStorage.getItem('@appItem');
        if (itemsStorage) {
            this.items = JSON.parse(itemsStorage);
        }
        return this.items;
    }

    async getItemById(idItem) {
        let items = [];
        const itemsStorage = await localStorage.getItem('@appItem');
        if (itemsStorage) {
            items = JSON.parse(itemsStorage);
        }
        const itemsFiltered = items.filter( item => (item.id) ===  Number(idItem));
        return itemsFiltered[0];
    }
}
