import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-funcionario',
  templateUrl: './registrar-funcionario.component.html',
  styleUrls: ['./registrar-funcionario.component.scss']
})
export class RegistrarFuncionarioComponent implements OnInit {

  funcoes = [
    {value: '1', viewValue: 'Técnico'},
    {value: '2', viewValue: 'Ajudante'},
    {value: '3', viewValue: 'Administrador'}
  ];

  cpfMask = [ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/];
  dateMask = [ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  constructor() { }

  ngOnInit() {
  }

}
