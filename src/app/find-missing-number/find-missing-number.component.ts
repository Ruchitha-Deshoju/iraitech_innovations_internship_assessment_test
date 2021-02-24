import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-find-missing-number',
  templateUrl: './find-missing-number.component.html',
  styleUrls: ['./find-missing-number.component.css']
})
export class FindMissingNumberComponent implements OnInit {
  @ViewChild ('f', {static: true}) indexForm: NgForm;
  private index: number;
  value: number = 0;
  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    this.index = +this.indexForm.value.index_position
    let i:number = 0
    this.value = 0
    while(i <= this.index) {
      if(i&1) { //odd_index
        this.value = (i*i)+1
      } else {
        this.value = (i*i)-1
      }
      i+=1
    }
    this.indexForm.reset()
  }

}









