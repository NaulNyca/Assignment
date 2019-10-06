import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TranggioithieuComponent } from './tranggioithieu/tranggioithieu.component';
import { TranglienheComponent } from './tranglienhe/tranglienhe.component';
import { TranggopyComponent } from './tranggopy/tranggopy.component';
import { TranghoidapComponent } from './tranghoidap/tranghoidap.component';
import { TrangdangnhapComponent } from './trangdangnhap/trangdangnhap.component';
import { TrangdangkiComponent } from './trangdangki/trangdangki.component';
import { TrangdoimatkhauComponent } from './trangdoimatkhau/trangdoimatkhau.component';
import { TrangsuadoitaikhoanComponent } from './trangsuadoitaikhoan/trangsuadoitaikhoan.component';
import { TrangdanhmucmonhocComponent } from './trangdanhmucmonhoc/trangdanhmucmonhoc.component';
import { TrangthitracnghiemComponent } from './trangthitracnghiem/trangthitracnghiem.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    TranggioithieuComponent,
    TranglienheComponent,
    TranggopyComponent,
    TranghoidapComponent,
    TrangdangnhapComponent,
    TrangdangkiComponent,
    TrangdoimatkhauComponent,
    TrangsuadoitaikhoanComponent,
    TrangdanhmucmonhocComponent,
    TrangthitracnghiemComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: '', 	component: TrangchuComponent}, 
      { path: 'dangki', 	component: TrangdangkiComponent},
      { path: 'dangnhap', 	component: TrangdangnhapComponent},
      { path: 'doimatkhau', 	component: TrangdoimatkhauComponent},
      { path: 'taikhoan', 	component: TrangsuadoitaikhoanComponent},
      { path: 'lienhe', 	component: TranglienheComponent},
      { path: 'gioithieu', 	component: TranggioithieuComponent},
      { path: 'gopy', 	component: TranggopyComponent},
      { path: 'danhmucmonhoc', 	component: TrangdanhmucmonhocComponent},
      { path: 'danhmucmonhoc/:i.id', 	component: TrangthitracnghiemComponent},
      { path: 'hoidap', 	component: TranghoidapComponent},
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
