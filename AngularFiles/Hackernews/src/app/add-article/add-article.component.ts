import {Component, OnInit} from '@angular/core';
import {ArticleComponent} from "../article/article.component";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [ArticleComponent,]
})
export class AddArticleComponent implements OnInit {

  title: string = "";
  url: string = "";
  error: string | boolean = "";

  articles_list = [
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

  removeArticle(art: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      for (const i in this.articles_list) {
        if (this.articles_list[i] == art) {
          //delete this.articles[i];
          //console.log(this);
          // @ts-ignore
          this.articles_list.splice(Number(i), 1);
        }
        //console.log(this.articles.length);
      }
      //console.log(art);
    }
  }

  // @ts-ignore
  addArticle() {
    var article = {
      title: this.title,
      url: this.url
    };
    if (!this.title || !this.url) {
      this.error = "Title or Url can not empty";
      return false;
    }
    for (const value of this.articles_list) {
      if (JSON.stringify(value) === JSON.stringify(article)) {
        this.error = "Title, Url are duplicated.";
        return false;
      }
    }
    if (!this.articles.validURL(this.url) && this.error !== false) {
      this.error = "Url is invalid.";
      return false;
    }
    if (this.error !== false) {
      this.error = "";
    }
    this.articles_list.push(article);
    //console.log(this);
  }

  constructor(private articles: ArticleComponent) {

  }

  ngOnInit(): void {
  }

}
