import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

import { ItemService } from '../item.service';

@Component({
    selector: 'app-item-create-and-edit',
    templateUrl: './item-create-and-edit.component.html',
    styleUrls: ['./item-create-and-edit.component.css'],
    providers: [MessageService]
})
export class ItemCreateAndEditComponent implements OnInit {

    units: SelectItem[];
    itemForm: FormGroup;
    perecible = '';
    idItem = '';
    item = {};

  constructor(
      private fb: FormBuilder,
      private messageService: MessageService,
      private itemService: ItemService,
      private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.idItem = this.route.snapshot.params['idItem'];
        if (this.idItem) {
            this.itemService.getItemById(this.idItem)
                .then( item => {
                    this.updateItemForm(item);
                })
                .catch(error => {
                    this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
                });
        }

        this.itemForm = this.fb.group({
            'name': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
            'unit': new FormControl(null, Validators.required),
            'quantity': new FormControl(null),
            'perecible': new FormControl(null, Validators.required),
            'price': new FormControl('', Validators.required),
            'dateFabricate': new FormControl(null, Validators.required),
            'dateValidate': new FormControl(null)
        });

        this.units = [
                {label: 'Selecione', value: null},
                {label: 'Litro', value: {id: 1, name: 'Litro', value: 'LT'}},
                {label: 'Quilograma', value: {id: 2, name: 'Quilograma', value: 'KG'}},
                {label: 'Unidade', value: {id: 3, name: 'Unidade', value: 'UN'}},
        ];
    }

    onSubmit(value: string) {
        this.itemService.create(value).then(_ => {
            this.itemForm.reset();
            this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Operação efetuada com sucesso!'});
        }).catch( erro => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível efetuar a operação. Tente novamente'});
        });
    }

    changePerecible(): void {
        const perecibleCtrl: AbstractControl = this.itemForm.get('perecible');
        const dateValidateCtrl: AbstractControl = this.itemForm.get('dateValidate');

        if (perecibleCtrl.value) {
            dateValidateCtrl.setValidators(Validators.required);
        } else {
            dateValidateCtrl.setValidators(null);
        }

        dateValidateCtrl.updateValueAndValidity();
      }

      private updateItemForm(item) {
        const dateValdiate = item.dateValidate ? new Date(item.dateValidate) : null;
        this.itemForm.patchValue({
            name: item.name,
            dateFabricate: new Date(item.dateFabricate),
            dateValidate: dateValdiate,
            perecible: item.perecible,
            price: item.price,
            quantity: item.quantity,
            unit: item.unit
        });
      }

}
