import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch: 'full'}, // portfolio
  {path: 'portfolio', component: CardComponent, children: [
    {path: ':id', component: CardComponent}, // portifolio/1
    {path: ':id/:token', component: CardComponent}, // portfolio/1/123
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
