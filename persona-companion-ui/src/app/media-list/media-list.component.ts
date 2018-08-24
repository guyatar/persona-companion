import { Component, OnInit, Input } from '@angular/core';
import { MediaService } from '../services/media/media.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  isCompleted: boolean = false;
  mediaItems: any;

  toggleIsCompleted() {
    this.isCompleted = !this.isCompleted;
    this.refreshMediaItems();
  }

  refreshMediaItems() {
    this.mediaService.getMediaItems(this.isCompleted)
      .subscribe((data) => this.mediaItems = data);
  }

  constructor(private mediaService: MediaService) {
    this.refreshMediaItems();
  }

  ngOnInit() {
  }

}
