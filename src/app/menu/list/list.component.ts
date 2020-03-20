import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/_models/menu-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  menu: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.menu.push(new MenuItem('Участники', 'user', 'people'));
    this.menu.push(new MenuItem('Расписание', 'user', 'schedule'));
    this.menu.push(new MenuItem('Доклады', 'user', 'presentation'));
    this.menu.push(new MenuItem('Фото', 'user', 'galery'));
  }

}
