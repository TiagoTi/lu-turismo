import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.sass']
})
export class ViagemComponent implements OnInit {

  @Input()
  nome: string;

  @Input()
  valor: number;

  @Input()
  descricao: string;

  constructor() { }

  ngOnInit() {
  }

}
