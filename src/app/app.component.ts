import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ag-showball';
  activeDom = 1;

  addActive(num: number) {
    this.activeDom = num;
  }
}
