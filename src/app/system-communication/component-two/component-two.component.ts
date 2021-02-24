import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  @Input() newData: string;
  constructor() { }

  ngOnInit(): void {}

}
