import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items = [
    {
      name:'Ice Cream'
    },
    {
      name: 'Vacation on the beach'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
