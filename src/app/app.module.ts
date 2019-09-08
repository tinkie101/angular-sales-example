import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountItemComponent } from './accounts/account-list/account-item/account-item.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryItemComponent } from './inventory/inventory-list/inventory-item/inventory-item.component';
import { SaleListComponent } from './sales/sale-list/sale-list.component';
import { SaleItemComponent } from './sales/sale-list/sale-item/sale-item.component';
import { HttpClientModule} from '@angular/common/http';
import { SaleFormComponent } from './sales/sale-form/sale-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountListComponent,
    AccountItemComponent,
    AccountDetailComponent,
    SalesComponent,
    InventoryComponent,
    InventoryListComponent,
    InventoryItemComponent,
    SaleListComponent,
    SaleItemComponent,
    SaleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
