import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a = '';
  b = '';
  data = new Map();
  constructor() {
    this.data.set("nehamam","1234");
    this.data.set("siddaraj","5678");
    this.data.set("prajwal","0000");
  }

  validate(){
    if(this.data.has(this.a)){
      if(this.data.get(this.a) == this.b){
        if(this.a == 'nehamam'){
          document.getElementById('admin')?.click()
        }
        else{
          document.getElementById('user')?.click()
        }
      }
      else{
        alert("Password Incorrect");
      }
    }
    else{
      alert("Username Invalid");
    }
  }

  ngOnInit(): void {
  }

}
