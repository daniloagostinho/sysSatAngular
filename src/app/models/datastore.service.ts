import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const config: DatastoreConfig = {
  baseUrl: 'http://localhost:8000/v1/',
  models: {
    //inserir minhas models aqui
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
      super(http);
    }

}