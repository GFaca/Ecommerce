import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Produtos', component: ProdutoComponent },
  { path: 'Request', component: RequestComponent },
  { path: 'Avaliacao', component: AvaliacaoComponent },
  //Redirect
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
