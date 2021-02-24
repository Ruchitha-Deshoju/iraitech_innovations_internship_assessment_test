import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit {
  @Input() newData: string;
  constructor() { }

  ngOnInit(): void {
  }

}
