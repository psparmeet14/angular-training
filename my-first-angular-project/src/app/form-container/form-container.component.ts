import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent {

  onSubmit(form: NgForm) {
    console.log("submitted!");
    console.log(form);
  }
}
