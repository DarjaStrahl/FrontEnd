import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ItemsResource } from "./items.resource";

@Injectable( )
export class ItemService {

  itemsURL = 'http://localhost:8080/items';

  constructor( private http: Http ) {

  }

  getItems() {
    return this.http.get( this.itemsURL )
      .map(( res => res.json() as ItemsResource ));
  }

  addItem( name: string ) {
    //post new item
  }

  checkItem( item: ItemResource ) {
    item.state = !item.state;
    //update item...
  }

  deleteItem( item: ItemResource ) {
    //delete item
  }

  getItemId( item: ItemResource ) {
    return item._links.self.href.substr(item._links.self.href.lastIndexOf("/")+1);
  }
}
