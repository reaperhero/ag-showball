import {Injectable} from '@angular/core';
import axios from 'axios'

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

}