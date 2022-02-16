import { Component, OnInit } from '@angular/core';
import { AnthServiceService } from '../../services/anth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  constructor(public singinService: AnthServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSingin(email: string, password: string) {
    await this.singinService.SignIn(email, password)
    if (this.singinService.isLoggedIn)
      this.isSignedIn = true
      console.log(this.isSignedIn)
  }
  handleLogout() {
    this.isSignedIn = false;
  }
}
