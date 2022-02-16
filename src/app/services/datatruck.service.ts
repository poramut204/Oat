import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import NameTable from '../models/name-table.model';


@Injectable({
  providedIn: 'root'
})
export class DatatruckService {
  private dbPath = '/dataTruck';

  TruckRef!: AngularFirestoreCollection<NameTable>;

  constructor(private db : AngularFirestore) {
    this.TruckRef = db.collection(this.dbPath);
   }
   getAll(): AngularFirestoreCollection<NameTable> {
    return this.TruckRef;
  }

  create(nametable: NameTable): any {
    return this.TruckRef.add({ ...nametable });
  }

  update(key: string, data: any): Promise<void> {
    return this.TruckRef.doc(key).update(data);
  }

  delete(key: string): Promise<void> {
    return this.TruckRef.doc(key).delete();
  }
}
