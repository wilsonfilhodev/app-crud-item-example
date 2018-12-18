import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemModule } from './item/item.module';
import { ItemSearchComponent } from './item/item-search/item-search.component';
import { ItemCreateAndEditComponent } from './item/item-create-and-edit/item-create-and-edit.component';

const routes: Routes = [
    { path: '', component: ItemSearchComponent},
    { path: 'itens', component: ItemSearchComponent},
    { path: 'itens/novo', component: ItemCreateAndEditComponent},
    { path: 'itens/:idItem', component: ItemCreateAndEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ItemModule,
    CoreModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
