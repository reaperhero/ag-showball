import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './view/index/index.component';
import {ChooseComponent} from './view/choose/choose.component';
import {NewstockComponent} from './view/newstock/newstock.component';
import {RecommandComponent} from './component/recommand/recommand.component';
import {DayinfoComponent} from './component/dayinfo/dayinfo.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: RecommandComponent
      },
      {
        path: 'dayinfo',
        component: DayinfoComponent
      },
      {
        path: 'shenhu',
        component: RecommandComponent
      },
      {
        path: 'kechuang',
        component: RecommandComponent
      }
    ]
  },
  {
    path: 'screener',
    component: ChooseComponent,
  },
  {
    path: 'newstock',
    component: NewstockComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
