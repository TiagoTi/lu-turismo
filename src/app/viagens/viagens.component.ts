import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.component.html',
  styleUrls: ['./viagens.component.sass']
})
export class ViagensComponent implements OnInit {

  constructor() { }

  viagens = [{
    'nome': 'cacum city 1',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 2',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 3',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 4',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 5',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 6',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 7',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 8',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }, {
    'nome': 'cacum city 9',
    'valor': 0.0,
    'descricao': 'lorem ipsum'
  }
];

  ngOnInit() {
  }

}
