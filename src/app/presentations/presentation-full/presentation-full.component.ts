import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Presentation } from 'src/app/_models/presentation';

@Component({
  selector: 'app-presentation-full',
  templateUrl: './presentation-full.component.html',
  styleUrls: ['./presentation-full.component.scss']
})
export class PresentationFullComponent implements OnInit {
  presentation: Presentation;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.dataService.getPresentation(id)
      .subscribe(
        p => {
          this.presentation = p;
        }
      );
  }

}
