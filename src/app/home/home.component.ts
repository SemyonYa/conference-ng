import { Component, OnInit } from '@angular/core';

import { DataService } from '../_services/data.service';
import { AuthService } from '../_services/auth.service';
import { onOpacityAnimation } from '../_animations/on-opacity.animation';
import { translateYAnimation } from '../_animations/translate-y.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [onOpacityAnimation, translateYAnimation]
})
export class HomeComponent implements OnInit {
  formVisible = false;
  notValid = false;
  user: any;
  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loggedIn$
      .subscribe(
        token => {
          this.user = token;
        }
      );
  }

  showForm() {
    this.formVisible = true;
  }

  login(formData: any) {
    this.dataService.login(formData)
      .subscribe(
        (data: any) => {
          if (data === false) {
            this.notValid = true;
          } else {
            this.notValid = false;
            this.authService.login(data);
            this.dataService.init(this.authService.loggedIn$.value.personId);
          }
          // console.log("HomeComponent -> login -> this.notValid", this.notValid)
          // console.log("HomeComponent -> login -> this.notValid", data)
        }
      );
  }

}
