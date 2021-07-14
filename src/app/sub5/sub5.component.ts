import { AfterViewInit, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, ElementRef, ViewChild, ViewEncapsulation,ChangeDetectorRef } from '@angular/core';
import { NavigationExtras ,Router} from '@angular/router';
import {tasks} from '../events';

@Component({
  selector: 'app-sub5',
  templateUrl: './sub5.component.html',
  styleUrls: ['./sub5.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Sub5Component implements OnInit {
  @ViewChild("hello") myView: ElementRef;
  @Input() childMess: string;
  @Input() condition: boolean;
  public b:boolean;
  Events=tasks;
  
  
  constructor(private elRef: ElementRef,private cd: ChangeDetectorRef,private router: Router) { }

  ngOnInit() {
     
  }
  
  ngOnChanges() {
    this.b=this.condition;
    this.cd.detectChanges();
    console.log(this.b);
    var date=new Date();
    console.log(this.childMess);
   
    for(var i=0,b=this.b;i<this.Events.length;i=i+1){
      this.Events[i].t=b;
    }
    console.log(this.Events)
    if (this.childMess=="ongoing"){
      
      var newEvents=this.Events.map( (e)=>{
        if(e.deadline>date){
          
          return `<li><div class="event-details"  >
          <h1>${e.n} <span><i class="fas fa-trophy"></i></span></h1>
          <p>Deadline : ${e.deadline.toDateString()}</p>
          <p>Prizes : ${e.prizes}</p>
          <p><span><i class="fas fa-globe"></i></span> ${e.mode}</p>
          <button (click)="'${this.question(e.que)}'" class="compete" style="display:${e.t}">Register</button>
        </div></li> `
        }
        
      });
      console.log(newEvents);
      this.myView.nativeElement.innerHTML=newEvents.join("");
    }
    
  
  if (this.childMess=="Achieved"){
    var newEvents=this.Events.map(function (e){
      if(e.deadline<date){
        
        return `<li><div class="event-details">
        <h1>${e.n} <span><i class="fas fa-trophy"></i></span></h1>
        <p>Deadline : ${e.deadline.toDateString()}</p>
        <p>Prizes : ${e.prizes}</p>
        <p><span><i class="fas fa-globe"></i></span> ${e.mode}</p>
      </div></li> `
      }
      
    });
    console.log(newEvents);
    this.myView.nativeElement.innerHTML=newEvents.join("");
  }
  
  
}
 question=function(order){
  let navigationExtras:NavigationExtras={
    state:order
  };
  
  //this.router.navigate(['sub4'],navigationExtras)
  console.log(order)
};

}



