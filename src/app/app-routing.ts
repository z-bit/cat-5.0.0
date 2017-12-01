import { Routes, RouterModule } from '@angular/router';
import { HomeContainer } from './_modules/home/items/cn_home.container';

const routes: Routes = [
  { path: '', component: HomeContainer },
  { path: 'home', component: HomeContainer },

];

export const AppRouting = RouterModule.forRoot(routes);
