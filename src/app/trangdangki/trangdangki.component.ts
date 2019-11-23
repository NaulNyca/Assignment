import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangdangki',
  templateUrl: './trangdangki.component.html',
  styleUrls: ['./trangdangki.component.css']
})
export class TrangdangkiComponent implements OnInit {

  newuser = {
    "username": "",
    "password": "",
    "fullname": "",
    "email": "",
    "gender": "true",
    "birthday": "",
    "schoolfee": "0",
    "marks": "0"
  }
  password = "";
  repassword;
  Students = JSON.parse(localStorage.getItem('listuser'));
  Student = JSON.parse(localStorage.getItem('user'));
  showsubject = false;
  show = false;

  constructor() { 
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

  dangki() {
    if(this.password.length > 7) {
      if(this.password === this.repassword) {
        if(this.newuser.username != "") {
          if(this.newuser.email != "") {
            if(this.newuser.birthday != "") {
              if(this.newuser.fullname != "") {
                for(var i = 0; i < this.Students.length; i++) {
                  if(this.newuser.username === this.Students[i].username) {
                    this.show = false;
                    alert('Tên tài khoản đã tồn tại');
                    return 0;
                  }
                  this.show = true;
                }
              }
              else {
                alert('Bạn vui lòng nhập tên đầy đủ');
              }
            }
            else {
              alert('Bạn vui lòng nhập ngày sinh');
            }
          }
          else {
            alert('Bạn vui lòng nhập email');
          }
        }
        else {
          alert('Bạn vui lòng nhập tên tài khoản');
        }
      }
      else {
        alert('Nhập lại mật khẩu không chính xác');
      }
    }
    else {
      alert('Mật khẩu phải từ 8 kí tự trở lên');
    }
  }
  Adduser() {
    this.newuser.password = this.repassword;
    this.Students.push(this.newuser);
    localStorage.setItem('listuser', JSON.stringify(this.Students));
  }
}
