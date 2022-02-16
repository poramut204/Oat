import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import NameTable from '../models/name-table.model';
import { LonLat } from '../models/LonLat'


@Injectable({
  providedIn: 'root'
})
export class DatatruckService {
  private dbPath = '/dataTruck';
  public lonLat: string = "";

  TruckRef!: AngularFirestoreCollection<NameTable>;

  constructor(private db: AngularFirestore) {
    this.TruckRef = db.collection(this.dbPath);
    this.lonLat = this.getLonLat();
  }

  getLonLat() : string{
    return this.lonLat
  }

  setLonLat(LonLat?:string){
    if(LonLat){
      this.lonLat = LonLat;
    }else{
      this.lonLat = "ไม่มีการส่งมา";
    }
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
