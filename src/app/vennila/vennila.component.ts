import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vennila',
  templateUrl: './vennila.component.html',
  styleUrls: ['./vennila.component.css']
})
export class VennilaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name="vennila";
  course="angular";
  today=new Date();

}
