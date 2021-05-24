import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.scss']
})
export class FullnameComponent implements OnInit {

  @Input() data=Data;
  constructor() { }

  ngOnInit(): void {
  }

}
