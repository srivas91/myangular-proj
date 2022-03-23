import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router:Router) { 
    
  }

  onClick(){
    this.router.navigateByUrl('/category/1');
    return true;
    }
  ngOnInit(): void {
    
  }

}
