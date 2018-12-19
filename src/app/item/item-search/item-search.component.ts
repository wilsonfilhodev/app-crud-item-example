import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import {ConfirmationService} from 'primeng/api';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css'],
  providers: [MessageService]
})

export class ItemSearchComponent implements OnInit {

    items = [];
    inputSearch;

    constructor(
         private itemService: ItemService,
         private confirmationService: ConfirmationService,
         private messageService: MessageService,
    ) { }

    ngOnInit() {
        this.loadItems();
    }

    dialogDelete(item) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir este item?',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleteItem(item);
            },
            reject: () => {
            }
        });
    }

    getItemsByName(value) {
        this.itemService.getByName(value)
        .then( items => this.items = items)
        .catch(error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        });
    }

    private loadItems() {
        this.itemService.getItems()
            .then(items => {
                this.items = items;
            })
            .catch(error => {
                this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        });
    }

    private deleteItem(item) {
        this.itemService.delete(item.id).then(_ => {
            this.loadItems();
            this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        }).catch(error => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente'});
        });
    }

}
