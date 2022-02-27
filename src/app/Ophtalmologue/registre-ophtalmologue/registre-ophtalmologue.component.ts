import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-registre-ophtalmologue',
  templateUrl: './registre-ophtalmologue.component.html',
  styleUrls: ['./registre-ophtalmologue.component.css']
})
export class RegistreOphtalmologueComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
 
  }
  constructor() { }

  ngOnInit() {
  }

}
