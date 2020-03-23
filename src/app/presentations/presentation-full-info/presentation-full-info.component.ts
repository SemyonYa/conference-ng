import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Presentation } from 'src/app/_models/presentation';

@Component({
  selector: 'app-presentation-full-info',
  templateUrl: './presentation-full-info.component.html',
  styleUrls: ['./presentation-full-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationFullInfoComponent {
  @Input() presentation: Presentation;
}
