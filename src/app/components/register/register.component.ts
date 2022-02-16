import { Component, OnInit } from '@angular/core';
import { AnthServiceService } from '../../services/anth-service.service'
import { EmployeeService } from '../../services/employee.service'
import NameTable from 'src/app/models/name-table.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  DataEmployee: NameTable = new NameTable();
  message = '';
  isSignedIn = false;
  constructor(public singoutService: AnthServiceService, private employeeService :EmployeeService) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }
  async onSingup(email: string, password: string) {
    await this.singoutService.SignUp(email, password)
    this.employeeService.create(this.DataEmployee).then(() => {});
    if (this.singoutService.isLoggedIn)
      this.isSignedIn = true
  }
  
  handleLogout() {
    this.isSignedIn = false;
  }

  saveDatatruck(): void {
    this.employeeService.create(this.DataEmployee).then(() => {
    });
  }
  newDatatruck(): void {
    this.DataEmployee = new NameTable();
  }

}
