import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {
  @Input() photo: Photo;
  @Output() openLightbox = new EventEmitter<number>();
  @Output() likePhoto = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  open(i: number) {
    this.openLightbox.emit(i);
  }

  like(id: number) {
    this.likePhoto.emit(id);
  }

}
