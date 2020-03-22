import { Component, OnInit } from '@angular/core';
import { PresentationCollection } from 'src/app/_models/presentation-collection';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit {
  collection = new PresentationCollection();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.presentationCollection$
      .subscribe(
        data => { this.collection = data }
      );
  }

}
