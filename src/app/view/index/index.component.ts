import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import axios from 'axios';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) {
    console.log(123);
    this.getData();
  }

  quoteList = [];
  tabIndex = 0;
  zhuListPostion = {transform: 'translate(0px)'};

  ngOnInit(): void {
  }

  async getData() {
    const httpUrl = 'http://localhost:8080/api/index/quote';
    const reuslt = await axios.get(httpUrl);
    console.log(reuslt.data.data.items);
    this.quoteList = reuslt.data.data.items;
  }

  toggleZhushu(index) {
    console.log(index);
    this.zhuListPostion = {transform: `translate(-${index * 640}px)`};
  }

  tabEvent(index: number) {
    const pathList = ['', 'dayinfo'];
    this.tabIndex = index;
    this.router.navigate([pathList[index]], {
      queryParams: {
        category: pathList[index]
      }
    });
  }
}
