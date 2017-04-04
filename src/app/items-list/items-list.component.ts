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

  constructor() { }

  ngOnInit() {
  }
/**Shows the status of the creation. Two-Ways-Binding */
  onCreateItem(){
    this.itemCreated = true;
    this.itemCreationStatus = 'Item was created! Name is' + this.itemName;
  }

  onUpdateItemName(event: Event) {
    this.itemName = (<HTMLInputElement>event.target).value;
  }
}
