import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DM_LoaiNguoiDungFormComponent } from './dm-loainguoidung-form/dm-loainguoidung-form.component';
import { DM_LoaiNguoiDungRoutingModule } from './dm-loainguoidung-routing.module';
import { DM_LoaiNguoiDungComponent } from './dm-loainguoidung.component';


@NgModule({
  declarations: [
    DM_LoaiNguoiDungComponent,
    DM_LoaiNguoiDungFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DM_LoaiNguoiDungRoutingModule
  ],
  exports: [
    DM_LoaiNguoiDungComponent
  ]
})
export class DM_LoaiNguoiDungModule { }
