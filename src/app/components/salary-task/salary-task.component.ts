import { Component, OnInit } from '@angular/core';
import { DatatruckService } from 'src/app/services/datatruck.service';
import { map } from 'rxjs/operators';
import NameTable from 'src/app/models/name-table.model';

@Component({
  selector: 'app-salary-task',
  templateUrl: './salary-task.component.html',
  styleUrls: ['./salary-task.component.css']
})
export class SalaryTaskComponent implements OnInit {
  nameSalary?:NameTable[];
  currentSalaryTask?: NameTable
  currentSalaryIndex = -1
  summary?:number[];
  total?:number=0;
  constructor(private datatruckService: DatatruckService) { }

  ngOnInit(): void {
    this.retrieveSalary();
  }

  refreshList(): void {
    this.currentSalaryTask = undefined;
    this.currentSalaryIndex = -1;
    this.retrieveSalary();
  }

  retrieveSalary(): void {
    this.datatruckService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.nameSalary = data;
      var calculate = []
      let summary: number; 
      var total : number=0;
      for(var i = 0;i<this.nameSalary.length;i++)
        if(this.nameSalary[i].SN_number){
          summary = 0
          var numberweight = Number(this.nameSalary[i].weight);
          var numberfreight = Number(this.nameSalary[i].freight);
          var numberfreight_human = Number(this.nameSalary[i].freight_human);
          summary = (numberweight*numberfreight)+numberfreight_human
          calculate.push(summary)
        }
        this.summary= calculate
      
      for(var i = 0;i<this.summary.length;i++)
        total = total + this.summary[i]
        
      this.total = total
      console.log(this.total)  
    });
  }
  setActiveSalary(nameTask: NameTable, index: number): void {
    this.currentSalaryTask = nameTask;
    this.currentSalaryIndex = index;
  }
}
