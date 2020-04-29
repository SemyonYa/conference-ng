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
    this.menu.push(new MenuItem('Участники', '/assets/svg/people.svg', 'people'));
    this.menu.push(new MenuItem('Расписание', '/assets/svg/alarm.svg', 'schedule'));
    this.menu.push(new MenuItem('Доклады', '/assets/svg/documents.svg', 'presentation'));
    this.menu.push(new MenuItem('Фото', '/assets/svg/images.svg', 'galery'));
  }

}
