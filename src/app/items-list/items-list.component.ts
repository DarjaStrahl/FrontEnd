import { Component, OnInit } from '@angular/core';

import { ItemComponent } from "../item/item.component";
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})

export class ItemsListComponent implements OnInit{

  // itemCreationStatus = 'No item was created!';
  itemName ='New Item';
  // itemCreated = false;
  // items = ['Wonder', 'Wonder 2'];

  selectedItem: ItemComponent;
  // itemsList: ItemComponent[];
  itemsList = LIST;

  constructor(
    private itemService: ItemService) {
      this.selectedItem = this.itemsList[0];
    }

  getItems() {
    this.itemService
      .getItems()
      .subscribe(
        items => this.itemsList = items);
  }

  ngOnInit(): void {
    this.getItems();
  }

/**Shows the status of the creation. Two-Ways-Binding */

  onCreateItem(){

    // this.itemCreated = true;
    // this.items.push(this.itemName);
    // this.itemCreationStatus = 'Item was created! Name is' + this.itemName;

    this.itemsList.push(new ItemComponent(this.itemsList.length + 1, this.itemName, false));
  }

  onSelect(item: ItemComponent): void {
    this.selectedItem = item;
  }

  // onUpdateItemName(event: Event) {
  //   this.itemName = (<HTMLInputElement>event.target).value;
  // }
}

const LIST: ItemComponent[] = [
  { id: 0, name: 'Item0', state: true },
  { id: 1, name: 'Item1', state: true },
  { id: 2, name: 'Item2', state: true },
  { id: 3, name: 'Item3', state: false },
  { id: 4, name: 'Item4', state: false }
];
