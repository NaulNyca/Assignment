import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trangthitracnghiem',
  templateUrl: './trangthitracnghiem.component.html',
  styleUrls: ['./trangthitracnghiem.component.css']
})
export class TrangthitracnghiemComponent implements OnInit {
  danhmucmonhoc = [
    {
      "id": 1,
      "imgScr":"assets/images/logos/ADAV.jpg",
      "name":"Lập trình Android nâng cao",
    },
    {
      "id": 2,
      "imgScr":"assets/images/logos/WEBU.jpg",
      "name":"Xây dựng trang Web",
    },
    {
      "id": 3,
      "imgScr":"assets/images/logos/DBBS.png",
      "name":"Cơ sở dữ liệu",
    },
    {
      "id": 4,
      "imgScr":"assets/images/logos/DBAV.png",
      "name":"SQL Server",
    },
    {
      "id": 5,
      "imgScr":"assets/images/logos/ASNE.png",
      "name":"Internet Maketing",
    },
    {
      "id": 6,
      "imgScr":"assets/images/logos/JAAV.png",
      "name":"Lập trình hướng đối tượng Java",
    },
    {
      "id": 7,
      "imgScr":"assets/images/logos/PHPP.png",
      "name":"Lập trình PHP",
    },
    {
      "id": 8,
      "imgScr":"assets/images/logos/CLCO.jpg",
      "name":"Điện toán đám mây",
    },
    {
      "id": 9,
      "imgScr":"assets/images/logos/ADBS.jpg",
      "name":"Lập trình Android cơ bản",
    },
    {
      "id": 10,
      "imgScr":"assets/images/logos/GAME.png",
      "name":"Lập trình Game 2D",
    },
    {
      "id": 11,
      "imgScr":"assets/images/logos/ADUI.jpg",
      "name":"Thiết kế giao diện trên Android",
    },
    {
      "id": 12,
      "imgScr":"assets/images/logos/MOWE.png",
      "name":"Thiết kế Web cho điện thoại di động",
    },
    {
      "id": 13,
      "imgScr":"assets/images/logos/ASNE.png",
      "name":"Lập trình ASP.NET",
    }
  ]
  cauhoi = [
    {
      "id": 1,
      "qes": "CSS là viết tắt của?",
      "daa": "Creative Style Sheets.",
      "dab": "Computer Style Sheets.",
      "dac": "Cascading Style Sheets.",
      "dad": "Colorful Style Sheets."
    },
    {
      "id": 2,
      "qes": "Tag nào định nghĩa CSS ở ngay trong file xHTML?",
      "daa": "<css>",
      "dab": "<script>",
      "dac": "<style>",
      "dad": "Tất cả các câu trên đều sai."
    },
    {
      "id": 3,
      "qes": "Thuộc tính nào định nghĩa CSS ngay trong 1 tag?",
      "daa": "Font.",
      "dab": "Class.",
      "dac": "Style.",
      "dad": "Styles."
    },
  ]
  monhoc:any;
  id;
  pagesize = 1;
  pagecurrent = 1;
  totlepage;
  name : String = 'name';
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
      this.route.paramMap.subscribe(para=>{
        this.id=+para.get('i.id');
      });
      this.monhoc = this.danhmucmonhoc.find(a=>a.id===this.id);
      this.totlepage = Math.ceil(this.cauhoi.length/this.pagesize);
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
}
