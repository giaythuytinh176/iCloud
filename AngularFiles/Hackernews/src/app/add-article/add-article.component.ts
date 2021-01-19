import {Component, Input, OnInit} from '@angular/core';
import {ArticleComponent} from '../article/article.component';

@Component({
  selector: 'app-add-article',
  // templateUrl: './add-article.component.html',
  template: `
    <h2>{{titleX}}</h2>
  `,
  styleUrls: ['./add-article.component.css'],
  providers: [ArticleComponent,],
})
export class AddArticleComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  title: string = '';
  url: string = '';
  error: string | boolean = '';
  @Input() titleX: any = 'Điện Tasdasdhoại';
  // tslint:disable-next-line:variable-name
  selectedProduct: boolean = false;
  index = -1;

  // tslint:disable-next-line:variable-name
  articles_list: Array<any> = [
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

  // tslint:disable-next-line:typedef
  editArticle(art: any, index: number): void {
    this.title = art.title;
    this.url = art.url;
    this.selectedProduct = true;
    this.index = index;
    // this.articles_list.title = art.title;
    // this.articles_list.url = art.url;
  }

  // @ts-ignore
  updateArticle(): boolean {
    // tslint:disable-next-line:forin
    for (const ind in this.articles_list) {
      // console.log(ind);
      // console.log(this.index);
      // @ts-ignore
      if (Number(ind) === Number(this.index)) {
        // console.log(ind);
        // console.log(this.index);
        // @ts-ignore
        // console.log(this.articles_list[this.index]);
        this.articles_list.splice(Number(this.index), 1);
        const article = {
          title: this.title,
          url: this.url
        };
        for (const value of this.articles_list) {
          if (JSON.stringify(value) === JSON.stringify(article)) {
            this.error = 'Title, Url are duplicated.';
            return false;
          }
        }
        this.articles_list.splice(Number(this.index), 0, article);
        // this.articles_list[Number(this.index)] = {
        //   title: this.title,
        //   url: this.url
        // };
        break;
      }
    }

  }

  // tslint:disable-next-line:typedef
  removeArticle(art: any): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      for (const i in this.articles_list) {
        // tslint:disable-next-line:triple-equals
        if (this.articles_list[i] == art) {
          this.articles_list.splice(Number(i), 1);
          break;
        }
      }
    }
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  addArticle() {
    const article = {
      title: this.title,
      url: this.url
    };
    if (!this.title || !this.url) {
      this.error = 'Title or Url can not empty';
      return false;
    }
    for (const value of this.articles_list) {
      if (JSON.stringify(value) === JSON.stringify(article)) {
        this.error = 'Title, Url are duplicated.';
        return false;
      }
    }
    if (!this.articles.validURL(this.url) && this.error !== false) {
      this.error = 'Url is invalid.';
      return false;
    }
    if (this.error !== false) {
      this.error = '';
    }
    this.articles_list.push(article);
    // console.log(this);
  }

  constructor(private articles: ArticleComponent) {

  }

  ngOnInit(): void {
  }

}
