import { Component, OnInit } from '@angular/core';
import { LonLat } from '../../models/LonLat'
import { DatatruckService } from 'src/app/services/datatruck.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lonLat: LonLat[] = [
    {
      City: "กรุงเทพมหานคร",
      LAT: 13.7278956,
      LON: 100.52412349999997,
      ZOOM: 13
    },
    {
      City: "กระบี่",
      LAT: 8.0862997,
      LON: 98.90628349999997,
      ZOOM: 13
    },
    {
      City: "กาญจนบุรี",
      LAT: 14.0227797,
      LON: 99.53281149999998,
      ZOOM: 13
    },
  ]

  public Lon = 0;
  public Lat = 0;

  constructor(private datatruckService: DatatruckService) { }

  ngOnInit(): void {
    this.setCheckCity()
    setInterval(() => {
    }, 1000);
  }

  setCheckCity() {
    for (let i = 0; i < this.lonLat.length; i++) {
      if(this.lonLat[i].City == this.datatruckService.getLonLat()){
        this.Lon = this.lonLat[i].LON
        this.Lat = this.lonLat[i].LAT
        break;
      }
    }
  }

}
