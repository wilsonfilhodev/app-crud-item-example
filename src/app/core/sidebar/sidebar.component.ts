import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    items: MenuItem[];

    constructor() { }

    ngOnInit() {
        this.items = [{
            label: 'Itens',
            items: [
                {label: 'Novo', icon: 'pi pi-fw pi-plus', routerLink: '/itens/novo'},
                {label: 'Pesquisa', icon: 'pi pi-fw pi-search',  routerLink: '/itens'}
            ]
        }];
    }

}
