import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  id: number;
  name: string;
  state: boolean;

  constructor(id: number, name: string, state: boolean) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
}

