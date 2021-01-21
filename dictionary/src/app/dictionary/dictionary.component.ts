import { Component, OnInit } from '@angular/core';
import { DictionaryService, IWord } from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  word!: IWord;
  wordVal!: any;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

  search($event: any): void {
    this.wordVal = $event.target.value;
    const meaning = this.dictionaryService.search(this.wordVal);
    this.word = {
      key: this.wordVal,
      meaning: meaning
    };
  }

}
