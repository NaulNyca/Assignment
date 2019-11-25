import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-trangxemlaibaithi',
  templateUrl: './trangxemlaibaithi.component.html',
  styleUrls: ['./trangxemlaibaithi.component.css']
})
export class TrangxemlaibaithiComponent implements OnInit {
  url='./assets/db/subjects.json';
  danhmucmonhoc: any;
  Quiz: any;
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
  task = JSON.parse(localStorage.getItem('task'));
  Students = JSON.parse(localStorage.getItem('listuser'));
  Student = JSON.parse(localStorage.getItem('user'));
  showsubject = false;
  show = false;
  showanswer = false;
  dapan = [];

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.xemlai();
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
  }

  home() {
    this.pagecurrent=1;
    this.showfirth = false;
    this.showbegin = false;
    this.showend = true;
    this.showlast = true;
    this.showfinish = false;
  }

  end() {
    this.pagecurrent = this.totlepage;
    this.showend = false;
    this.showlast = false;
    this.showfirth = true;
    this.showbegin = true;
    this.showfinish = true;
  }
  
  counttotlepage() {
    return Math.ceil(this.Quiz.length/this.pagesize);
  }
   xemlai() {
    this.urlquiz = './assets/db/Quizs/' + this.task.IdSubject + '.json';
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
        for(var i = 0; i < this.Quiz.length; i++) {
          for(var j = 0; j < 4; j++) {
            if(this.Quiz[i].AnswerId === this.Quiz[i].Answers[j].Id) {
              this.dapan.push(this.Quiz[i].Answers[j].Text);
            }
          }
        }
        console.log(this.dapan);
      });
    });
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