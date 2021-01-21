import { Component, OnInit } from '@angular/core';
import { DictionaryService, IWord } from '../dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  word!: IWord;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

  search($event: any): void {
    const wordVal = $event.target.value;
    const meaning = this.dictionaryService.search(wordVal);
    this.word = {
      key: wordVal,
      meaning: meaning
    };
  }

}
