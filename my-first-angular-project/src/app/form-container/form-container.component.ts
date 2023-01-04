import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;
  @ViewChild('f2', {static: false}) signupForm2: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  isSubmitted: boolean = false;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription: string = 'Advanced';
  assignmentData = {
    email: '',
    subscription: '',
    password: ''
  }
  isAssignmentSubmitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log("submitted!");
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  // onSubmitForm(form: NgForm) {
  //   console.log('submitted!!!');
  //   console.log(form);
  // }

  onSubmitForm() {
    console.log('submitted!!!');
    console.log(this.signupForm2);
    this.isAssignmentSubmitted = true;
    this.assignmentData.email = this.signupForm2.value.email2;
    this.assignmentData.subscription = this.signupForm2.value.subscription;
    this.assignmentData.password = this.signupForm2.value.password;
  }
}
