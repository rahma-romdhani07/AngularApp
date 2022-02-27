import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import GLightbox from 'glightbox';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;
   isLinear = false;

  constructor(private _formBuilder: FormBuilder , private route : Router) {}

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}