import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-photo-lightbox',
  templateUrl: './photo-lightbox.component.html',
  styleUrls: ['./photo-lightbox.component.scss']
})
export class PhotoLightboxComponent implements OnInit {
  @Input() activePhoto: Photo;
  @Output() closeLightbox = new EventEmitter<null>();
  @Output() toggleLightbox = new EventEmitter<string>();
  @ViewChild('photoElem') photoElem: ElementRef;
  @ViewChild('next') nextElem: ElementRef;
  @ViewChild('prev') prevElem: ElementRef;
  @ViewChild('closeBtn') closeElem: ElementRef;
  constructor() { }

  ngOnInit(): void { }

  close() {
    this.closeLightbox.emit();
  }

  toggle(dir: string) {
    this.toggleLightbox.emit(dir);
  }

  setPosition() {
    const width = this.photoElem.nativeElement.width / 2;
    const height = this.photoElem.nativeElement.height / 2;
    this.photoElem.nativeElement.style.top = 'calc(50vh - ' + height + 'px)';
    this.photoElem.nativeElement.style.left = 'calc(50vw - ' + width + 'px)';
    this.closeElem.nativeElement.style.top = 'calc(50vh - ' + height + 'px)';
    this.closeElem.nativeElement.style.right = 'calc(50vw - ' + width + 'px)';
    this.nextElem.nativeElement.style.right = 'calc(50vw - ' + width + 'px)';
    this.prevElem.nativeElement.style.left = 'calc(50vw - ' + width + 'px)';
  }
}
