import { Component, OnInit } from '@angular/core';
import { Scrumuser } from '../scrumuser';
import { ScrumdataService } from '../scrumdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _scrumdataService: ScrumdataService) { }

  ngOnInit(): void {
  }

  userTypes = ['developer', 'owner']
  scrumUserModel = new Scrumuser('', '', '', '', '');
  feedbk=''
  onSubmit(){
    
      console.log(this.scrumUserModel);
      this._scrumdataService.signup(this.scrumUserModel)
      .subscribe(
        data => this.feedbk = 'Your account has been created successfully!!!',
        error => console.error('Error', error)
      )
  }
}
