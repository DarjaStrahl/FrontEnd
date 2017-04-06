import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ItemService} from "./server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Wonder Checklist';

  constructor (private itemService: ItemService) {}


}
