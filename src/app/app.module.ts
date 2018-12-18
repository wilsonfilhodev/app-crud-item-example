import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemCreateAndEditComponent } from './components/item/item-create-and-edit/item-create-and-edit.component';
import { ItemSearchComponent } from './components/item/item-search/item-search.component';

import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreateAndEditComponent,
    ItemSearchComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    CurrencyMaskModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    MenuModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TableModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
