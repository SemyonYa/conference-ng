import { Component, Input, ViewChild, ElementRef,  AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent, interval } from 'rxjs';
import { Rating } from 'src/app/_models/rating';
import { debounce } from 'rxjs/operators';
import { Mark } from 'src/app/_models/mark';
import { onOpacityAnimation } from 'src/app/_animations/on-opacity.animation';

@Component({
  selector: 'app-presentation-full-marks',
  templateUrl: './presentation-full-marks.component.html',
  styleUrls: ['./presentation-full-marks.component.scss'],
  animations: [onOpacityAnimation]
})
export class PresentationFullMarksComponent implements AfterViewInit {
  onEdit: Observable<any>;
  @Input() ratings: Rating[]
  @Input() mark: Mark;
  @ViewChild('descriptionElem') descriptionElem: ElementRef;
  @Output() setMark = new EventEmitter<Mark>();

  ngAfterViewInit() {
    fromEvent(this.descriptionElem.nativeElement, 'input')
      .pipe(
        debounce(() => interval(1000))
      )
      .subscribe(
        (e: InputEvent) => {
          this.mark.description = e.target['value'];
          this.set();
        }
      );
  }

  selectRating(id: number) {
    this.mark.ratingId = id;
    this.set();
  }

  set() {
    this.setMark.emit(this.mark);
  }
}
