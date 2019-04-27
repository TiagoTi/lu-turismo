import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.component.html',
  styleUrls: ['./viagens.component.sass']
})
export class ViagensComponent implements OnInit {

  constructor() { }

  viagens = [{
    'nome': 'cabo frio',
    'valor': 0.0,
    'descricao': 'lorem ipsum',
    'src': 'assets/img/cabo-frio.jpg'
  }, {
    'nome': 'bauneario',
    'valor': 0.0,
    'descricao': 'lorem ipsum',
    'src': 'assets/img/bauneario.jpg'
  }, {
    'nome': 'cabo frio',
    'valor': 0.0,
    'descricao': 'lorem ipsum',
    'src': 'assets/img/cabo-frio.jpg'
  },{
    'nome': 'bauneario',
    'valor': 0.0,
    'descricao': 'lorem ipsum',
    'src': 'assets/img/bauneario.jpg'
  }, {
    'nome': 'cabo frio',
    'valor': 0.0,
    'descricao': 'lorem ipsum',
    'src': 'assets/img/cabo-frio.jpg'
  },{
    'nome': 'bauneario',
    'valor': 0.0,
    'descricao': 'lorem ipsum',
    'src': 'assets/img/bauneario.jpg'
  }
];

  ngOnInit() {
  }

}
