import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.less']
})
export class ChooseComponent implements OnInit {
  industriesList = [];
  areaList = [];
  areas = {};
  tools = {};
  tabList = [];
  toolsObj = { '基本指标' : []};
  currentTab = '基本指标';
  sxList = [];
  exchange = 'sh_sz';
  areacode = '';
  indcode = '';
  sxStockList = [];

  constructor(public newSer: NewsService) {
  }

  async ngOnInit() {
    this.getHy();
    this.getArea();
    this.getTools();
  }

  //获取行业
  async getHy() {
    let result = await this.newSer.getIndustries();
    //console.log(result.data.industries)
    this.industriesList = result.data.industries;
  }

  async getArea() {
    let resultArea = await this.newSer.getAreas();
    //console.log(resultArea.data.areas)
    this.areaList = Object.keys(resultArea.data.areas);
    this.areas = resultArea.data.areas;
  }

  async getTools() {
    let resultTools = await this.newSer.getTools();
    this.toolsObj = resultTools;
    console.log(resultTools);
    this.tabList = Object.keys(resultTools);
    this.currentTab = this.tabList[0];
    console.log(this.tabList);

  }

  async getStocks() {
    let resultStocks = this.newSer.getcstock({
      order_by: 'follow',
      page: 1,
      order: 'desc'
    });
    console.log(resultStocks);
  }

  toggleTabs(key) {
    this.currentTab = key;
  }

  async checkEvent(item) {
    console.log(item);
    let isContinus = true;
    this.sxList.forEach((sxObj, index) => {
      if (sxObj.field == item.field) {
        this.sxList.splice(index, 1);
        isContinus = false;
      }
    });

    if (!isContinus) {
      return;
    }

    if (item.adj != 0) {
      item.field = item.field + '.20191231';
    }


    let result = await this.newSer.getFieldRange(item.field);
    console.log(result.data);
    item.min = result.data.min;
    item.max = result.data.max;
    item.cmin = item.min;
    item.cmax = item.max;
    this.sxList.push(item);
  }

  async getSg() {
    let options = {
      category: 'CN',
      exchange: this.exchange,
      areacode: this.areacode,
      indcode: this.indcode,
      order_by: 'symbol',
      order: 'desc',
      page: 1,
      size: 30,
      only_count: 0,
      current: '',
      pct: '',
      // pettm: "-22966.49_197247.3"
      // roediluted.20191231: 1.12_13.87
      _: new Date().getTime()
    };

    this.sxList.forEach((item, index) => {
      if (parseFloat(item.cmax) > parseFloat(item.cmin)) {
        options[item.field] = item.cmin + '_' + item.cmax;
      } else {
        options[item.field] = item.cmax + '_' + item.cmin;
      }

    });

    let result = await this.newSer.getSxStocks(options);
    this.sxStockList = result.data.list;
    console.log(this.sxStockList);
  }

}
