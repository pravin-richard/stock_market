import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDetailService } from 'src/app/service/company-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private companyDetailService:CompanyDetailService,private router: Router) { }

  ngOnInit(): void {
  }

  isloggedOut: boolean = false;

  isLoggedIn(){
    return this.companyDetailService.getLogInStatus();
  }

  isLoggedOut(){
    return this.isloggedOut;
  }

  loggedOut(){
    this.isloggedOut=true;
    this.router.navigate(['login']);
  }
}
