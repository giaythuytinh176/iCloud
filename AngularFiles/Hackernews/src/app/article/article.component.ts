import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <h2>Today's article</h2>
    <!--; else noTitle-->
    <div *ngIf="addarticle.articles_list && addarticle.articles_list.length !== 0; else notfoundArticle">
      <div *ngFor="let art of addarticle.articles_list">
        <a *ngIf="art" href="{{art.url}}" target="_blank">{{art.title}}</a> &nbsp;  <app-likes></app-likes>&nbsp;
        <input *ngIf="art" type="submit" class="btn btn-danger" value="Delete" (click)="addarticle.removeArticle(art)">

      </div>
      <div style="color: #ff0000;" *ngIf="addarticle.error">
        {{ addarticle.error }}
      </div>
    </div>


    <ng-template #notfoundArticle> <div *ngIf="addarticle.articles_list.length == 0" style="color: red;">Not found article.</div>
    </ng-template>

    <hr>
    <label>Title</label>
    <input class="form-control" type="text" [(ngModel)]="addarticle.title" autocomplete="on">
    <label>Url</label>
    <input class="form-control" type="text" [(ngModel)]="addarticle.url" autocomplete="on">
    <input type="submit" value="Add" (click)="addarticle.addArticle()">

    <app-add-article [titleX]="test" #addarticle></app-add-article>
  `,
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit  {
  test = "sdddddasdfsadsđ";

  constructor() {
  }
  // tslint:disable-next-line:prefer-const

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


  ngOnInit() {
    console.log("on init");
  }

  ngOnDestroy() {
    console.log("on Destroy");
  }

  validURL(str: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }


}
