import { Component, OnInit } from '@angular/core';

import {SelectItem} from 'primeng/api';
import { EnumUnit } from 'src/app/models/EnumUnit';
import {MessageService} from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'app-item-create-and-edit',
    templateUrl: './item-create-and-edit.component.html',
    styleUrls: ['./item-create-and-edit.component.css'],
    providers: [MessageService]
})
export class ItemCreateAndEditComponent implements OnInit {

    units: SelectItem[];
    itemForm: FormGroup;
    submitted: boolean;
    perecible = '';
    modeEdit = false;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.itemForm = this.fb.group({
        'name': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
        'unit': new FormControl('', Validators.required),
        'quantity': new FormControl(''),
        'perecible': new FormControl('', Validators.required),
        'price': new FormControl('', Validators.required),
        'dateFabricate': new FormControl('', Validators.required),
        'dateValidate': new FormControl('')
    });

    this.units = [
            {label: 'Selecione', value: null},
            {label: 'Litro', value: {id: 1, name: 'Litro', value: 'LT'}},
            {label: 'Quilograma', value: {id: 2, name: 'Quilograma', value: 'KG'}},
            {label: 'Unidade', value: {id: 3, name: 'Unidade', value: 'UN'}},
      ];
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.messageService.add({severity: 'info', summary: 'Success', detail: this.modeEdit ? 'Edição efetuada com sucesso!' : 'Cadastro efetuado com sucesso!'});
    }

    changePerecible(): void {
        const perecibleCtrl: AbstractControl = this.itemForm.get('perecible');
        const dateValidateCtrl: AbstractControl = this.itemForm.get('dateValidate');

        // Set validators accordingly
        if (perecibleCtrl.value === 'S') {
            dateValidateCtrl.setValidators(Validators.required);
        } else {
            dateValidateCtrl.setValidators(null);
        }

        dateValidateCtrl.updateValueAndValidity();
      }

    ngOnInit() {
    }

}
