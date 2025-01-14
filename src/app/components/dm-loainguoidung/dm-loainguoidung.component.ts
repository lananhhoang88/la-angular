import { Component, Injector, OnInit } from '@angular/core';
import { ColumnSchema } from '../../shared/models/schema';
import { ListBase } from '../../shared/base-class/list-base';
import { DM_LoaiNguoiDungService } from './services/dm-loainguoidung.service';

@Component({
  selector: 'dm-loainguoidung',
  templateUrl: './dm-loainguoidung.component.html',
  styleUrls: ['./dm-loainguoidung.component.scss']
})
export class DM_LoaiNguoiDungComponent extends ListBase implements OnInit {
  constructor(
    injector: Injector,
    private _dm_LoaiNguoiDungService: DM_LoaiNguoiDungService
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    this.setting.objectName = 'loại người dùng';
    this.setting.service = this._dm_LoaiNguoiDungService;
    this.setting.cols = [
      new ColumnSchema({
        field: 'ma',
        label: 'Mã loại',
        width: '140px',
        fullTextSearch: true
      }),
      new ColumnSchema({
        field: 'ten',
        label: 'Tên loại',
        fullTextSearch: true
      }),
    ];
    super.ngOnInit();
  }
}
