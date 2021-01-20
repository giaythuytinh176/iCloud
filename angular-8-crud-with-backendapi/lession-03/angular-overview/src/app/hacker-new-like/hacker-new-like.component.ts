import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacker-new-like',
  templateUrl: './hacker-new-like.component.html',
  styleUrls: ['./hacker-new-like.component.css']
})
export class HackerNewLikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hello = "hello";

  likes: number = 0;
  
  likeThis() {
    this.likes++;
  }

}
