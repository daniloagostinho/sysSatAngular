import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-ordem-servico',
  templateUrl: './registrar-ordem-servico.component.html',
  styleUrls: ['./registrar-ordem-servico.component.scss']
})
export class RegistrarOrdemServicoComponent implements OnInit {

  funcoes = [
    {value: '1', viewValue: 'Zelador'},
    {value: '2', viewValue: 'Síndico'},
    {value: '3', viewValue: 'Porteiro'},
    {value: '4', viewValue: 'Condomino'}
  ];

  edificios = [
    {value: '1', viewValue: 'Esmeralda'},
    {value: '2', viewValue: 'Gramado XII'},
    {value: '3', viewValue: 'Hawaii'},
    {value: '4', viewValue: 'Elena'}
  ];

  funcionarios = [
    {value: '1', viewValue: 'Marcos'},
    {value: '2', viewValue: 'Marcus'},
    {value: '3', viewValue: 'Paulo'},
    {value: '4', viewValue: 'Rubens'}
  ];

  servico = [
    {value: '1', viewValue: 'Interfone'},
    {value: '2', viewValue: 'Portão automático'},
    {value: '3', viewValue: 'Câmera'},
    {value: '4', viewValue: 'Cerca elétrica'}
  ];

  valor: any;

  cpfMask = [ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/];
  dateMask = [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit() {
  }
}
