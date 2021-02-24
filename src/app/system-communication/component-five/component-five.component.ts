import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-five',
  templateUrl: './component-five.component.html',
  styleUrls: ['./component-five.component.css']
})
export class ComponentFiveComponent implements OnInit {

  @Output() updateText = new EventEmitter<string>();

  input_text: string = ''
  constructor() { }

  ngOnInit(): void {}

  changeData(data: string) {
    this.updateText.emit(data)
  }
}
