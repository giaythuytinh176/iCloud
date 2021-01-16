import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

  updateName(name: string) {
    this.petName = name;
  }

  updateImage(image: string) {
    this.petImage = image;
  }
  petImage2: Array<string> = [
    'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg',
    'https://huyhoa.com/files/2019/02/chuyen-doi-font-chu-dep-online.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIfbj0ImwWoSaweTS9nd3yllefbQeRgAorA&usqp=CAU',
    'https://gobranding.com.vn/wp-content/uploads/2020/04/cach-tao-banner-online-1.png',
  ];
}
