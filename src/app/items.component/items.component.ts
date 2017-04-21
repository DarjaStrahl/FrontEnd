import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  itemName ='New Item';
  items: Array<ItemResource>;
  selectedItem: ItemResource;

  constructor( private itemService: ItemService ) { }

  ngOnInit( ) {
    this.itemService
      .getItems()
      .subscribe(
        res => this.items = res._embedded.items);
  }

  onSelectItem( item: ItemResource ) {
    this.selectedItem = item;
  }

  onAddItem ( name: string ) {
    this.itemService.addItem( name );
  }

  onCheckItem( item: ItemResource ) {
    this.itemService.checkItem( item );
  }

  onDeleteItem ( item: ItemResource ) {
    this.itemService.deleteItem( item );
  }

  onGetItemId( item: ItemResource ) {
    return this.itemService.getItemId( item );
  }
}
