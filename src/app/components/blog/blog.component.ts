import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  articles: any = [];
  a: any = {};
  constructor() {}

  ngOnInit(): void {
    this.articles = [
      {
        id: 1,
        date: '25/10/2023',
        title: 'Romolu to stay at Real Nadrid?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      },
      {
        id: 2,
        date: '17/6/2023',
        title: 'Romolu to stay at Juventus?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      },
    ];
  }
}
