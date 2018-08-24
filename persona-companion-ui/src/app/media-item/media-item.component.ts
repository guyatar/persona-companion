import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem: any;

  isCompleted() {
    return (this.mediaItem && this.mediaItem.currentProgress == this.mediaItem.length)
  }

  getProgressPercentage() {
    var percentage: number = (this.mediaItem.currentProgress / this.mediaItem.length) * 100;
    return percentage + "%";
  }

  increaseProgress() {
    if (this.mediaItem.currentProgress < this.mediaItem.length)
      this.mediaItem.currentProgress++;
  }

  decreaseProgress() {
    if (this.mediaItem.currentProgress > 0)
      this.mediaItem.currentProgress--;
  }

  constructor() { }

  ngOnInit() {
  }

}
