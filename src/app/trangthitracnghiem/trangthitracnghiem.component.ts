import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trangthitracnghiem',
  templateUrl: './trangthitracnghiem.component.html',
  styleUrls: ['./trangthitracnghiem.component.css']
})
export class TrangthitracnghiemComponent implements OnInit {
  url='./assets/db/subjects.json';
  danhmucmonhoc: any;
  Quiz: any;
  Id;
  pagesize = 1;
  pagecurrent = 1;
  totlepage;
  name : String = 'name';
  urlquiz;
  showfirth = true;
  showbegin = true;
  showlast = true;
  showend = true;
  showfinish = false;
  task = {
    "IdSubject": "",
    Ans: [],
    "p": 0,
    "s": 0,
  }
  Student = JSON.parse(localStorage.getItem('user'));
  Students = JSON.parse(localStorage.getItem('listuser'));
  mark = 0;
  show = false;
  subjectname;
  showthi = true;
  showsubject = false;
  m = 90;
  s = 0;
  p = 90;
  g = 0;
  timeout = null;

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.thi();
    if(this.Student.length === 0) {
      this.showsubject = false;
      document.getElementById('user').innerHTML = "Tài Khoản";
    }
    else {
      this.showsubject = true;
    }
  }
  getAllQuiz () {
    return this.http.get(this.urlquiz);
  }
  getAll () {
    return this.http.get(this.url);
  }

  next() {
    if(this.pagecurrent < this.totlepage) {
      this.pagecurrent++;
    }
    this.showbegin = true;
    this.showfirth = true;
    if(this.pagecurrent === this.totlepage) {
      this.showlast = false;
      this.showend = false;
      this.showfinish = true;
    }
    this.tinhdiem();
  }

  previrous() {
    if(this.pagecurrent > 1) {
      this.pagecurrent--;
    }
    this.showlast = true;
    this.showend = true;
    this.showfinish = false;
    if(this.pagecurrent === 1) {
      this.showbegin = false;
      this.showfirth = false;
    }
    this.tinhdiem();
  }

  home() {
    this.pagecurrent=1;
    this.showfirth = false;
    this.showbegin = false;
    this.showend = true;
    this.showlast = true;
    this.showfinish = false;
    this.tinhdiem();
  }

  end() {
    this.pagecurrent = this.totlepage;
    this.showend = false;
    this.showlast = false;
    this.showfirth = true;
    this.showbegin = true;
    this.showfinish = true;
    this.tinhdiem();
  }
  
  counttotlepage() {
    return Math.ceil(this.Quiz.length/this.pagesize);
  }

  tinhdiem() {
    this.mark = 0;
    for(var i = 0; i < this.totlepage; i++) {
      if(this.Quiz[i].AnswerId ===  Number(this.task.Ans[i])) {
        this.mark += this.Quiz[i].Marks;
      }
    }
  }
   finish() {
      this.tinhdiem();
      this.Student.marks = this.mark;
      this.task.IdSubject = this.Id;
      this.task.p = 89 - this.m;
      this.task.s = 60 - this.s;
      this.stop();
      for(var i = 0; i < this.Students.length; i++) {
        if(this.Student.username === this.Students[i].username) {
          this.Students[i].marks = this.mark;
        }
      }
      localStorage.setItem('listuser', JSON.stringify(this.Students));
      localStorage.setItem('user', JSON.stringify(this.Student));
      localStorage.setItem('task', JSON.stringify(this.task));
      this.show = true;
      console.log(this.task);
   }
   thi() {
    this.Id = location.href;
    this.Id = this.Id.slice(this.Id.length - 4, this.Id.length);
    this.urlquiz = './assets/db/Quizs/' + this.Id + '.json';
    this.getAllQuiz().subscribe (data=>{
      this.Quiz=data;
      this.totlepage = this.counttotlepage();
      if(this.pagecurrent === 1) {
        this.showbegin = false;
        this.showfirth = false;
      }
      if(this.pagecurrent === this.totlepage) {
        this.showend = false;
        this.showlast = false;
      }
      this.getAll().subscribe (data=>{
        this.danhmucmonhoc=data;
        for(var i = 0; i < this.danhmucmonhoc.length; i++) {
          if(this.Id === this.danhmucmonhoc[i].Id) {
            this.subjectname = this.danhmucmonhoc[i].Name
          }
        }
      });
    });
  }
  dangxuat() {
    this.Student = [];
    this.task = {
      "IdSubject": "",
      Ans: [],
      "p": 0,
      "s": 0,
    }
    localStorage.setItem('user', JSON.stringify(this.Student));
    localStorage.setItem('task', JSON.stringify(this.task));
  }
  start() {
    this.showthi = false;
    if (this.s === -1){
      this.m -= 1;
      this.s = 59;
    }
    if (this.m == -1){
      clearTimeout(this.timeout);
      this.tinhdiem();
      this.Student.marks = this.mark;
      this.task.IdSubject = this.Id;
      this.task.p = this.p;
      this.task.s = this.g;
      this.stop();
      for(var i = 0; i < this.Students.length; i++) {
        if(this.Student.username === this.Students[i].username) {
          this.Students[i].marks = this.mark;
        }
      }
      localStorage.setItem('listuser', JSON.stringify(this.Students));
      localStorage.setItem('user', JSON.stringify(this.Student));
      localStorage.setItem('task', JSON.stringify(this.task));
      document.getElementById('exampleModalhetgio').style.display = "block";
      return false;
    }
    document.getElementById('m').innerText = this.m.toString();
    document.getElementById('s').innerText = this.s.toString();
    this.timeout = setTimeout(()=>{
      this.s--;
      this.start();
    }, 1000);
  } 
  stop(){
      clearTimeout(this.timeout);
  }
}