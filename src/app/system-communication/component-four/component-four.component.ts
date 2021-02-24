import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.css']
})
export class ComponentFourComponent implements OnInit {
  @Input() newData: string;
  constructor() { }

  ngOnInit(): void {}

}

