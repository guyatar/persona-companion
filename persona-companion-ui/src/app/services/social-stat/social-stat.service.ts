import { Injectable } from '@angular/core';
import { RESTApiService } from '../rest-api/rest-api.service';

@Injectable()
export class SocialStatService {

  getSocialStatTypes() {
    return this.restApi.fetchFromApi("socialStats/Types");
  }

  getSocialStats() {
    return this.restApi.fetchFromApi("socialStats");
  }

  constructor(private restApi: RESTApiService) { }

}