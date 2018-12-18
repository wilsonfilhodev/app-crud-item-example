import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

import { ItemCreateAndEditComponent } from './item-create-and-edit/item-create-and-edit.component';
import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemGridComponent } from './item-grid/item-grid.component';

@NgModule({
  declarations: [
      ItemCreateAndEditComponent,
      ItemGridComponent,
      ItemSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    CalendarModule,
    CurrencyMaskModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ItemCreateAndEditComponent,
    ItemSearchComponent,
  ]
})
export class ItemModule { }
