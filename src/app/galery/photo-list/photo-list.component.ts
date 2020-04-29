import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { Photo } from 'src/app/_models/photo';
import { translateYAnimation } from 'src/app/_animations/translate-y.animation';
import { lightboxOnOffAnimation } from 'src/app/_animations/lightbox-on-off.animation';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  animations: [translateYAnimation, lightboxOnOffAnimation]
})
export class PhotoListComponent implements OnInit {
  activePhoto: Photo = null;
  photos: Photo[] = [];
  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.dataService.photos$
      .subscribe(
        data => { this.photos = data }
      );
  }

  openLightbox(no: number) {
    this.activePhoto = this.photos.find(p => p.no === no);
  }

  toggleLightbox(dir: string) {
    const currentNo = this.activePhoto.no;
    let no = 0;
    if (dir === '+') {
      no = currentNo < this.photos.length ? currentNo + 1 : currentNo;
    } else if (dir === '-') {
      no = currentNo > 1 ? currentNo - 1 : currentNo;
    }
    if (no > 0) {
      this.activePhoto = this.photos.find(p => p.no === no);
    }
  }

  closeLightbox() {
    this.activePhoto = null;
  }

  likePhoto(id: number) {
    this.dataService.likePhoto(this.authService.loggedIn$.value.personId, id);
  }
}
