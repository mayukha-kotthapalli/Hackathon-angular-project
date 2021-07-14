import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub4',
  templateUrl: './sub4.component.html',
  styleUrls: ['./sub4.component.css']
})
export class Sub4Component implements OnInit {
  d:any;
  
  constructor(private router: Router,private route:ActivatedRoute){
    this.route.queryParams.subscribe(p=>{
      this.d=this.router.getCurrentNavigation().extras.state
    });
  }


  ngOnInit() {
    console.log(this.d)
  }
    
  

} 
