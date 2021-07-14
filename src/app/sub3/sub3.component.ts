import { Component, OnInit } from '@angular/core';

import {Sub5Component} from '../sub5/sub5.component'


@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component implements OnInit {
  prentMess:string;
  bool:string;
  constructor() { }
  
  ngOnInit () {
    this.bool='none';
    this.prentMess="ongoing"
    
   }
  
   
   Func(){
     this.prentMess='Achieved';
  }
  display(){
    this.prentMess='ongoing';
  }

}
