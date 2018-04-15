import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Datastore } from '../models/datastore.service';
import { Http } from '@angular/http';

@Injectable()
export class SysSatService extends Datastore {

  constructor(http: Http) {
    super(http);
   }

}
