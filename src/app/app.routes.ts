import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ExplicationComponent} from "./pages/explication/explication.component";
import {NgModule} from "@angular/core";
import {CreationComponent} from "./pages/creation/creation.component";
import {ModelesComponent} from "./pages/modeles/modeles.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'creation',
    component: CreationComponent
  },
  {
    path: 'creation/:id',
    component: CreationComponent
  },
  {
    path: 'modeles',
    component: ModelesComponent
  },
  {
    path: 'explication',
    component: ExplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
