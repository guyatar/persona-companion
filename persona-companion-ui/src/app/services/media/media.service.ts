import { Injectable } from '@angular/core';
import { RESTApiService } from '../rest-api/rest-api.service';

@Injectable()
export class MediaService {

  getMediaItems(isCompleted: boolean) {
    return this.restApi.fetchFromApi("mediaItems?completed=" + isCompleted);
  }

  getMediaTypes() {
    return this.restApi.fetchFromApi("mediaItems/Types");
  }

  getContributionTypes() {
    return this.restApi.fetchFromApi("contribution/Types");
  }

  constructor(private restApi: RESTApiService) {

  }
}