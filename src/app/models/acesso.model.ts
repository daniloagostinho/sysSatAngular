import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'acesso'
})
export class Acesso extends JsonApiModel {

    @Attribute()
    login: string;

    @Attribute()
    senha: string;
}