import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  url='./assets/db/students.json';
  listuser: any;
  task = {
    "IdSubject": "",
    Ans: [],
  }
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAll().subscribe (data=>{
      this.listuser = data;
      localStorage.setItem('listuser',JSON.stringify(this.listuser));
      localStorage.setItem('user',JSON.stringify([]));
      localStorage.setItem('task',JSON.stringify(this.task));
    });
  }
  getAll () {
    return this.http.get(this.url);
  }
  

}
