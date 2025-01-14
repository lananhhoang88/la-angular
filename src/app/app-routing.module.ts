import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dashboard.component';
import { NotFoundComponent } from './components/not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('../app/components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'dm-loainguoidung',
    loadChildren: () => import('../app/components/dm-loainguoidung/dm-loainguoidung.module').then(m => m.DM_LoaiNguoiDungModule)
  },
  {
    path: 'dm-chucvu',
    loadChildren: () => import('../app/components/dm-chucvu/dm-chucvu.module').then(m => m.DM_ChucVuModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
