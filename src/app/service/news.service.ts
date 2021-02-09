import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  host = 'http://localhost:8080';

  constructor() {
  }

  async getNews(category) {
    const httpUrl = this.host + `/api/index/news?category=${category}`;
    const result = await axios.get(httpUrl);
    return result.data;
  }

  // 获取行业
  async getIndustries() {
    const httpUrl = this.host + `/api/choose/industries`;
    const result = await axios.get(httpUrl);
    return result.data;
  }

  // 获取地区
  async getAreas() {
    const httpUrl = this.host + `/api/choose/areas`;
    const result = await axios.get(httpUrl);
    return result.data;
  }

  // 获取条件股票
  // 获取股票
  // 关注人数：follow7d(本周新增关注人数) fellow(最热门)
  // 讨论条数：tweet tweet7d
  // 分享交易: deal7d
  async getcstock(options) {
    const httpUrl = this.host + `/api/choose/stocks`;
    const result = await axios.get(httpUrl, {
      params: options
    });
    return result.data;
  }

  // 获取筛选工具内容
  async getTools() {
    const httpUrl = this.host + `/api/choose/tools`;
    const result = await axios.get(httpUrl);
    return result.data;
  }

  // 字段范围
  async getFieldRange(field) {
    const httpUrl = this.host + `/api/choose/range?field=${field}`;
    const result = await axios.get(httpUrl);
    return result.data;
  }

  // 获取sx的股票
  async getSxStocks(options) {
    const httpUrl = this.host + `/api/choose/sxStock`;
    const result = await axios.get(httpUrl, {params: options});
    return result.data;
  }
}
