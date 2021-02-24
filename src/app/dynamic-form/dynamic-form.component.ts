import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  userForm: FormGroup;
  button_text: string;
  output_data: boolean = false;

  constructor(private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      user_name: '', 
      phoneNumbers: this.fb.array([])
    })
  }

  ngOnInit(): void {}

  phoneNumbers(): FormArray {
    return this.userForm.get("phoneNumbers") as FormArray
  }

  newNumber(): FormGroup {
    return this.fb.group({
      phoneNumber: ''
    })
  }

  addPhoneNumber() {
    this.phoneNumbers().push(this.newNumber());
  }

  removeNumber(i: number) {
    this.phoneNumbers().removeAt(i)
  }

  onSubmit() {
    this.output_data = true;

    console.log(this.userForm.value);
    console.log(this.userForm.value.phoneNumbers.length)
  }
}

