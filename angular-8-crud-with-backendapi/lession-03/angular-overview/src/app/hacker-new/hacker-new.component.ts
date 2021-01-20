import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-hacker-new',
  templateUrl: './hacker-new.component.html',
  styleUrls: ['./hacker-new.component.css']
})
export class HackerNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };

  /*
  // cach 01: su dung binding
  updateArticle() {
    this.article.title = document.getElementById('article-title').value;
    console.log(this.article.title);
    this.article.url = document.getElementById('article-url').value;
  }
  */

  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  addArticle() {
    this.article.title = 'dantri.com.vn';
    this.article.url = 'dantri.com.vn';
    console.log(this.article);

    this.articles.push(this.article);
    console.log(this.articles);
  }

  // add to object
  public myListArticles: Article[] = [
    { title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await', url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40' },
    { title: 'Game of Life', url: 'https://thefullsnack.com/posts/game-of-life.html' },
  ];

  addModelArticle() {
    this.myListArticles.push({
      title: this.article.title,
      url: this.article.url ,
    });
    console.log(this.myListArticles);
  }

}
