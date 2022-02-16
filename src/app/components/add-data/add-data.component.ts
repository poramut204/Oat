import { Component, OnInit } from '@angular/core';
import NameTable from 'src/app/models/name-table.model';
import { DatatruckService } from 'src/app/services/datatruck.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  
  table: NameTable = new NameTable();
  submitted = false;
  message = '';
  

  constructor(private datatruckService :DatatruckService) { }

  ngOnInit(): void {
    // this.retrieveDataTruck();
  }
  saveDatatruck(): void {
    if(this.table.SN_number != ''&& this.table.freight_human != 0){
      this.datatruckService.create(this.table).then(() => {
      this.submitted = true;
      });
    }
      
  }
  newDatatruck(): void {
    this.submitted = false;
    this.table = new NameTable();
  }
  

}
