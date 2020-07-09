import { Component, OnInit } from '@angular/core';
import { ScrumdataService } from '../scrumdata.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scrumUserLoginData = {"email":"", "fullname":"", "password":"", "projname":""};
  feedbk='';
  
  constructor(private _scrumdataService: ScrumdataService, private _router:Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    //console.log(this.scrumUserLoginData);
    this._scrumdataService.login(this.scrumUserLoginData)
    .subscribe(
      data => {
        console.log('success', data);
        localStorage.setItem('token', data.token);
        this._router.navigate(['/scrumboard', data['project_id']]);
      },
      error => {
        console.error('Error', error);
        this.feedbk='Invalid Login Credentials';
      }
    )
  }

}
