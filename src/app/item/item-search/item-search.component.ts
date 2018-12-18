import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})

export class ItemSearchComponent implements OnInit {

    items: any[];

    constructor() { }

    ngOnInit() {
        this.items = [
            { name: 'Arroz de Bico Parbolizado de Teste Agrião de Palha', unit: 'KG', qtd: '1.0', price: '2.10', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Feijão', unit: 'KG', qtd: '1.003', price: '3.50', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Açucar', unit: 'KG', qtd: '1.500', price: '1.90', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Café Bico Parbolizado de Teste Agrião de Palha', unit: 'KG', qtd: '2.050', price: '5.49', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Óleo', unit: 'LT', qtd: '1.5', price: '5.00', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Agua', unit: 'LT', qtd: '2.500', price: '2.90', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Vinagre', unit: 'LT', qtd: '0.750', price: '3.55', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Leite', unit: 'LT', qtd: '1.250', price: '4.79', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: true },
            { name: 'Copo', unit: 'UN', qtd: '6', price: '10.00', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: false },
            { name: 'Prato', unit: 'UN', qtd: '3', price: '34.50', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: false },
            { name: 'Colher', unit: 'UN', qtd: '9', price: '9.99', dateFabricate: '2018-12-05', dateValdiate: '2019-01-30', perecible: false },
        ];
    }

}
