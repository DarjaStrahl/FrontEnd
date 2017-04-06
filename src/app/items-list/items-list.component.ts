import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemCreationStatus = 'No item was created!';
  itemName ='TestName';
  itemCreated = false;
  items = ['Wonder', 'Wonder 2'];

  constructor() { }

  ngOnInit() {
  }
/**Shows the status of the creation. Two-Ways-Binding */
  onCreateItem(){
    this.itemCreated = true;
    this.items.push(this.itemName);
    this.itemCreationStatus = 'Item was created! Name is' + this.itemName;
  }

  onUpdateItemName(event: Event) {
    this.itemName = (<HTMLInputElement>event.target).value;
  }
}
