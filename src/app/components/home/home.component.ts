import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnthServiceService } from '../../services/anth-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout: EventEmitter<void> = new EventEmitter();

  constructor(public anthService: AnthServiceService) { }

  ngOnInit(): void {
  }
  logout(){
    this.anthService.logout()
    this.isLogout.emit()
  }

}
