import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-trangquenmatkhau',
  templateUrl: './trangquenmatkhau.component.html',
  styleUrls: ['./trangquenmatkhau.component.css']
})
export class TrangquenmatkhauComponent implements OnInit {

  Student = JSON.parse(localStorage.getItem('user'));
  task = JSON.parse(localStorage.getItem('task'));

  Students = JSON.parse(localStorage.getItem('listuser'));
  email = "";
  username = "";
  password = "";
  show = false;
  showsubject = false;
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

  hienmatkhau() {
    let check = 0
    for(var i = 0; i < this.Students.length; i++) {
      if(this.Students[i].email === this.email && this.Students[i].username === this.username) {
        this.show = true;
        this.password = this.Students[i].password;
        check = 1;
      }
    }
    if(check === 0) {
      alert('Sai email hoặc tên tài khoản!')
    }
  }
  back() {
    history.back();
  }
  dangxuat() {
    this.Student = [];
    this.task = {
      "IdSubject": "",
      Ans: [],
    }
    localStorage.setItem('user', JSON.stringify(this.Student));
    localStorage.setItem('task', JSON.stringify(this.task));
  }
}
