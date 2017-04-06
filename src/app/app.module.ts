import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';
import {ItemService} from "./server.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
