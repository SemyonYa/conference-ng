import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/_models/menu-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() menuItem: MenuItem;
  constructor() { }
}
