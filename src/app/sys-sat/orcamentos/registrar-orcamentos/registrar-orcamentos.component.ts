import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-orcamentos',
  templateUrl: './registrar-orcamentos.component.html',
  styleUrls: ['./registrar-orcamentos.component.scss']
})
export class RegistrarOrcamentosComponent implements OnInit {

  funcoes = [
    {value: '1', viewValue: 'Zelador'},
    {value: '2', viewValue: 'Síndico'},
    {value: '3', viewValue: 'Porteiro'},
    {value: '4', viewValue: 'Condomino'}
  ];

  cpfMask = [ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/];
  dateMask = [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit() {
  }
}
