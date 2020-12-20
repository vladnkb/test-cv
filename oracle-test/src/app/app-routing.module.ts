import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "signin",
    component: SignInComponent
  },
  {
    path: 'board',
    loadChildren: () => import('./components/board/board.module').then(m => m.BoardModule),
  },/* Lazy loading */
  {
    path: "**",
    redirectTo: "board"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
