import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-edificios',
  templateUrl: './registrar-edificios.component.html',
  styleUrls: ['./registrar-edificios.component.scss']
})
export class RegistrarEdificiosComponent implements OnInit {

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
