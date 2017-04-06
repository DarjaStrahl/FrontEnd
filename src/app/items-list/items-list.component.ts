import { Component, OnInit } from '@angular/core';
import {ItemService} from "../server.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemCreationStatus = 'No item was created!';
  itemName ='TestName';
  itemCreated = false;
  items = [
     {
        name:'Ice Cream'
      },
     {
       name: 'Vacation on the beach'
      }
  ];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

/**Shows the status of the creation. Two-Ways-Binding */
  onCreateItem(name:string){
    this.itemCreated = true;
    this.items.push({
      name: name,
    });
    this.itemCreationStatus = 'Item was created! Name is' + this.itemName;
  }

  onGet(){
    this.itemService.getItems()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onUpdateItemName(event: Event) {
    this.itemName = (<HTMLInputElement>event.target).value;
  }
}
