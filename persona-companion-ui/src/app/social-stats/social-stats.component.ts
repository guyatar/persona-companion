import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-stats',
  templateUrl: './social-stats.component.html',
  styleUrls: ['./social-stats.component.css']
})
export class SocialStatsComponent implements OnInit {

  private middleAxisLine: number = 200;

  maxCoords: any = [
    { x: 200, y: 20 },
    { x: 50, y: 380 },
    { x: 380, y: 130 },
    { x: 20, y: 130 },
    { x: 340, y: 380 }
  ];

  coordsToString(coords: any) {
    var str = '';
    for (var i = 0; i < coords.length; i++) {
      if (str.length > 0) {
        str += " ";
      }

      str += coords[i].x + "," + coords[i].y;
    }

    return str;
  }

  private calcAxisPercentage(value: any, percentage: number) {
    var newValue = value;

    if (value > this.middleAxisLine) {
      newValue = this.middleAxisLine + (((value - this.middleAxisLine) * percentage) / 100);
    } else if (value < this.middleAxisLine) {
      newValue = this.middleAxisLine - (((this.middleAxisLine - value) * percentage) / 100);
    }

    return newValue;
  }

  private calcCoordPercentage(coord: any, percentage: number) {
    console.log("before", coord);
    var newCoord = {
      x: this.calcAxisPercentage(coord.x, percentage),
      y: this.calcAxisPercentage(coord.y, percentage)
    };

    console.log("after", coord);
    return newCoord;
  }

  coordsToString2(percentage: number) {
    var str = '';
    for (var i = 0; i < this.maxCoords.length; i++) {
      var coord = this.calcCoordPercentage(this.maxCoords[i], percentage);

      if (str.length > 0) {
        str += " ";
      }

      str += coord.x + "," + coord.y;
    }

    return str;
  }

  getSocialPointsCoords() {

  }

  constructor() { }

  ngOnInit() {
  }

}
