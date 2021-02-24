import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  @Input() newData: string;
  constructor() { }

  ngOnInit(): void {
  }

}
