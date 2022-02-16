import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import NameTable from '../models/name-table.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dbPath2 = '/Employee';

  EmployeeRef: AngularFirestoreCollection<NameTable>;

  constructor(private db2: AngularFirestore) {
    this.EmployeeRef = db2.collection(this.dbPath2);
   }

   getAll(): AngularFirestoreCollection<NameTable> {
    return this.EmployeeRef;
  }

  create(tutorial: NameTable): any {
    return this.EmployeeRef.add({ ...tutorial });
  }

  update(key: string, data: any): Promise<void> {
    return this.EmployeeRef.doc(key).update(data);
  }

  delete(key: string): Promise<void> {
    return this.EmployeeRef.doc(key).delete();
  }
}
