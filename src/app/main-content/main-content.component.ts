import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  carouselImgSrc = 'https://picsum.photos/1920/900/?random=';
  carouselItems = [
    {
      title: 'Discount is going finished',
      punchLine: 'It\'s Now or Never !!!',
      btnText: 'Go shop now'
    },
    {
      title: 'New product already on!',
      punchLine: '',
      btnText: 'Check it out'
    },
    {
      title: 'Cars are 30% now',
      punchLine: 'What are you waiting for?',
      btnText: 'Get your new car'
    },
    {
      title: 'First to this platform ?',
      punchLine: 'Don\'t miss it !',
      btnText: 'Sign on'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
