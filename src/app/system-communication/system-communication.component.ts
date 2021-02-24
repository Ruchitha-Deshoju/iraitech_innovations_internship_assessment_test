import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-communication',
  templateUrl: './system-communication.component.html',
  styleUrls: ['./system-communication.component.css']
})
export class SystemCommunicationComponent implements OnInit {
  updated_Data: string = ''
  constructor() { }

  ngOnInit(): void {}

  sendData(text: string) {
    this.updated_Data = text
  }

}
