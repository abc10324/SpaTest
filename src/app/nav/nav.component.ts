import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'Used Item Exchange Platform';
  navItems = [
    {
      title: 'Car',
      link: '#',
      isDropDownList: false,
      dropDownItemList:[]
    },
    {
      title: 'Old stuff',
      link: '#',
      isDropDownList: false,
      dropDownItemList:[]
    },
    {
      title: 'Detail',
      link: '#',
      isDropDownList: true,
      dropDownItemList: [
        {
          title: 'Cars',
          link: 'Cars'
        },
        {
          title: 'Bikes',
          link: 'Bikes'
        },
        {
          title: 'Parts',
          link: 'Parts'
        }
      ]
    }
  ];

  

  constructor() { }

  ngOnInit() {
  }

}
