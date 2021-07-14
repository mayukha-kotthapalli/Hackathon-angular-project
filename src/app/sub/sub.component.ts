import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {Sub5Component} from '../sub5/sub5.component'
@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit  {
  prentMess:string;
  bool:string;
  constructor(private router: Router) { }

  ngOnInit(){
    this.prentMess="ongoing";
    this.bool='block';
  }
  events:{}=[{n:"Event1",deadline:"30-05-2021",prizes:"$50",mode:"Online",que:'Implement iterative quicksort algorithm'}
  ,{n:"Event2",deadline:"30-05-2021",prizes:"$50",mode:"Online",que:'Find the sum of two linked lists using Stack?'},
  {n:"Event3",deadline:"30-05-2021",prizes:"$50",mode:"Online",que:'Find all permutations of a string'},
  {n:"Event4",deadline:"30-05-2021",prizes:"$50",mode:"Online",que:'Traverse a binary tree in postorder traversal without recursion'},
  {n:"Event5",deadline:"30-05-2021",prizes:"$50",mode:"Online",que:'Count a number of leaf nodes in a given binary tree'},];
  test=function(){
    this.router.navigateByUrl('/sub3');
  };
  question=function(order){
    let navigationExtras:NavigationExtras={
      state:order
    };
    
    this.router.navigate(['sub4'],navigationExtras)
   
  };
}


