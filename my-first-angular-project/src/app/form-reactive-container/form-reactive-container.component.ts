import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-form-reactive-container',
  templateUrl: './form-reactive-container.component.html',
  styleUrls: ['./form-reactive-container.component.css']
})
export class FormReactiveContainerComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames: string[] = ['Chris', 'Anna'];
  projectForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // )
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna'
      }
    });

    /********************** ASSIGNMENT **********************/

    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName]),
      'userEmail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setInterval(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  ////////////////////////////////////////

  onSaveProject() {
    console.log(this.projectForm);
  }

  // forbiddenName(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === 'Test') {
  //     return {'projectNameIsForbidden': true};
  //   } 
  //   return null;
  // }
}
