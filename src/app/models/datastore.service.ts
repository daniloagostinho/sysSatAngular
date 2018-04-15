import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment.prod';
import { Acesso } from './acesso.model';
import { Funcionario } from './funcionario.model';

const config: DatastoreConfig = {
  baseUrl: environment.sysSatApi,
  models: {
    funcionario: Funcionario,
    acesso: Acesso
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
      super(http);
    }

}