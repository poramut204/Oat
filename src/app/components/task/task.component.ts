import { Component, OnInit } from '@angular/core';
import { DatatruckService } from 'src/app/services/datatruck.service';
import { map } from 'rxjs/operators';
import NameTable from 'src/app/models/name-table.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  nameTasks?: NameTable[];
  currentTask?: NameTable;
  currentIndex = -1;
  

  constructor(private datatruckService: DatatruckService) { }

  ngOnInit(): void {
    this.retrieveTruck();
  }
  refreshList(): void {
    this.currentTask = undefined;
    this.currentIndex = -1;
    this.retrieveTruck();
  }
  retrieveTruck(): void {
    this.datatruckService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.nameTasks = data;
    });
  }
  setActiveTruck(nameTask: NameTable, index: number): void {
    this.currentTask = nameTask;
    this.currentIndex = index;
  }
}
