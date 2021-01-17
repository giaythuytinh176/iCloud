import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  // article: object = {
  //   title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
  //   url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  // };
  // updateArticle() {
  //   // @ts-ignore
  //   this.article.title = document.getElementById('article-title').value;
  //   // @ts-ignore
  //   this.article.url = document.getElementById('article-url').value;
  // }

  validURL(str: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
