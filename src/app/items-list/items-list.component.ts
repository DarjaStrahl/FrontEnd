import { Component, OnInit } from '@angular/core';

import { ItemComponent } from "../item/item.component";
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})

export class ItemsListComponent implements OnInit {

  itemName ='New Item';
  selectedItem: ItemComponent;
  itemsList: ItemComponent[];
  errorMessage: String;

  constructor( private itemService: ItemService ) { }

  ngOnInit( ) {
    this.getItems();
  }

  getItems( ) {
    this.itemService
      .getItems()
      .subscribe(
        items => this.itemsList = items,
        error => this.errorMessage = <any>error);
  }

  onCreateItem( ) {
    this.itemsList.push(new ItemComponent( this.itemsList.length + 1, this.itemName, false ));
    //TODO: id must allways be unique (length+1==bad solution)!
  }

  onSelect( item: ItemComponent ): void {
    this.selectedItem = item;
  }
}
