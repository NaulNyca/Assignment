import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trangdanhmucmonhoc',
  templateUrl: './trangdanhmucmonhoc.component.html',
  styleUrls: ['./trangdanhmucmonhoc.component.css']
})
export class TrangdanhmucmonhocComponent implements OnInit {
  url='./assets/db/subjects.json';
  danhmucmonhoc: any;
  pagesize = 4;
  pagecurrent = 2;
  totlepage;
  name : string = 'name';
  Student = JSON.parse(localStorage.getItem('user'));
  task = JSON.parse(localStorage.getItem('task'));
  showsubject = false;
  
  constructor(private http:HttpClient) { 
    console.log(this.Student)
  }

  ngOnInit() {
    this.getAll().subscribe (data=>{
      this.danhmucmonhoc=data;
      this.totlepage = Math.ceil(this.danhmucmonhoc.length/this.pagesize);
      if(this.Student.length === 0) {
        this.showsubject = false;
        document.getElementById('user').innerHTML = "Tài Khoản"
      }
      else {
        this.showsubject = true;
      }
    });
  }

  getAll () {
    return this.http.get(this.url);
  }

  next() {
    if(this.pagecurrent < this.totlepage) {
      this.pagecurrent++;
    }
  }

  previrous() {
    if(this.pagecurrent > 1) {
      this.pagecurrent--;
    }
  }

  home() {
    this.pagecurrent=1;
  }

  end() {
    this.pagecurrent = this.totlepage;
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
  yeucandangnhap() {
    if(this.Student.length === 0) {
      alert("Bạn chưa đăng nhập! Hãy đăng nhập để được vào làm bài thi!");
    }
  }
}
