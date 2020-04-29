import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-form',
  templateUrl: './enter-form.component.html',
  styleUrls: ['./enter-form.component.scss'],
})
export class EnterFormComponent implements OnInit {
  form: FormGroup;
  constructor() { }
  @Output() login = new EventEmitter<any>();

  ngOnInit(): void {
    this.form = new FormGroup({
      'login': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  submit() {
    this.login.emit(this.form.value);
  }

}
