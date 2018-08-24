import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media/media.service';
import { SocialStatService } from '../services/social-stat/social-stat.service';

@Component({
  selector: 'app-new-media-item',
  templateUrl: './new-media-item.component.html',
  styleUrls: ['./new-media-item.component.css']
})
export class NewMediaItemComponent implements OnInit {

  mediaTypes: any;
  socialStatTypes: any;
  contributionTypes: any;

  constructor(private mediaService: MediaService, private socialService: SocialStatService) {
    mediaService.getMediaTypes()
      .subscribe((data) => this.mediaTypes = data);

    socialService.getSocialStatTypes()
      .subscribe((data) => this.socialStatTypes = data);

    mediaService.getContributionTypes()
      .subscribe((data) => this.contributionTypes = data);
  }

  ngOnInit() {
  }

}
