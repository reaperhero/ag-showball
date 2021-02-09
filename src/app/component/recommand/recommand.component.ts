import {Component, OnInit} from '@angular/core';

import {NewsService} from '../../service/news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recommand',
  templateUrl: './recommand.component.html',
  styleUrls: ['./recommand.component.less']
})
export class RecommandComponent implements OnInit {
  newsList = [];

  constructor(public route: ActivatedRoute, public newsSer: NewsService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.newsSer.getNews('recommand').then((res) => {
        this.newsList = res.items;
      });
    });
  }

  getImgUrl(domain: string, list: string) {
    const imageList = list.split(',');
    return 'https:' + domain + imageList[0];
  }
}
