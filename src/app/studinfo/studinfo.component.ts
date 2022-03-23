import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studinfo',
  templateUrl: './studinfo.component.html',
  styleUrls: ['./studinfo.component.css']
})
export class StudinfoComponent implements OnInit {

  constructor(private rout:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
