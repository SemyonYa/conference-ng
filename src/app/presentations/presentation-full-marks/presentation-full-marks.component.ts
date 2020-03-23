import { Component, OnInit, Input } from '@angular/core';
import { RatingsWithMark } from 'src/app/_models/ratings-with-mark';

@Component({
  selector: 'app-presentation-full-marks',
  templateUrl: './presentation-full-marks.component.html',
  styleUrls: ['./presentation-full-marks.component.scss']
})
export class PresentationFullMarksComponent {
  @Input() ratingsWithMark: RatingsWithMark
}
