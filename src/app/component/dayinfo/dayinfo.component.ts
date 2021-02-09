import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NewsService} from '../../service/news.service';

@Component({
  selector: 'app-dayinfo',
  templateUrl: './dayinfo.component.html',
  styleUrls: ['./dayinfo.component.less']
})
export class DayinfoComponent implements OnInit {

  newsList = [];
  currentTime = new Date();

  constructor(public route: ActivatedRoute, public newsSer: NewsService) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:one-variable-per-declaration
    const now = new Date();
    const y = now.getFullYear();

    this.route.queryParams.subscribe((params) => {
      this.newsSer.getNews('dayinfo').then((res) => {
        console.log(res)
        this.newsList = res.items;
      });
    });
  }

}
