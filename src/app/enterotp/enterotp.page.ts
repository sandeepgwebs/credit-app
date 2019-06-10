import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.page.html',
  styleUrls: ['./enterotp.page.scss'],
})
export class EnterotpPage implements OnInit {
  enterotp: FormGroup;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
