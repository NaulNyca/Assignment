import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranggopy',
  templateUrl: './tranggopy.component.html',
  styleUrls: ['./tranggopy.component.css']
})
export class TranggopyComponent implements OnInit {
  
  Student = JSON.parse(localStorage.getItem('user'));
  task = JSON.parse(localStorage.getItem('task'));
  showsubject = false;

  constructor() { }

  ngOnInit() {
    if(this.Student.length === 0) {
      this.showsubject = false;
      document.getElementById('user').innerHTML = "Tài Khoản"
    }
    else {
      this.showsubject = true;
    }
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
