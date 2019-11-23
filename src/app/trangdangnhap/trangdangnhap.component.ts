import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trangdangnhap',
  templateUrl: './trangdangnhap.component.html',
  styleUrls: ['./trangdangnhap.component.css']
})
export class TrangdangnhapComponent implements OnInit {

  taikhoan: any;
  matkhau: any;
  Students = JSON.parse(localStorage.getItem('listuser'));
  Student = JSON.parse(localStorage.getItem('user'));
  show = false;
  fullname: any;
  showsubject = false;

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    if(this.Student.length === 0) {
      this.showsubject = false;
      document.getElementById('user').innerHTML = "Tài Khoản";
    }
    else {
      this.showsubject = true;
    }
  }

  dangnhap() {
     for(var i = 0; i < this.Students.length; i++) {
       if(this.taikhoan === this.Students[i].username && this.matkhau === this.Students[i].password) {
         localStorage.setItem('user', JSON.stringify(this.Students[i]));
         this.fullname = this.Students[i].fullname;
         this.show = true;
       }
     }
   }
}
