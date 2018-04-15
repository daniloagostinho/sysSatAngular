import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Acesso } from './acesso.model';

@JsonApiModelConfig({
    type: 'funcionario'
})
export class Funcionario extends JsonApiModel {

    @Attribute()
    nome: string;

    @Attribute()
    dataAdmissao: string;

    @Attribute()
    cpf: string;

    @Attribute()
    funcao: string;

    @HasMany()
    acesso: Acesso;
}