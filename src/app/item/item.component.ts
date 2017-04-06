import {Component, OnInit, Input} from '@angular/core';
import { ItemsListComponent } from  '../items-list/items-list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

    @Input() name: ItemsListComponent;

  constructor() { }


}
