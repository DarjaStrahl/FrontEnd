import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemCreationStatus = 'No item was created!';
  itemName ='TestName';

  constructor() { }

  ngOnInit() {
  }
/**Shows the status of the creation. Two-Ways-Binding */
  onCreateItem(){
    this.itemCreationStatus = 'Item was created!';
  }

  onUpdateItemName(event: Event) {
    this.itemName = (<HTMLInputElement>event.target).value;
  }
}
