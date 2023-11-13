import { Component, OnInit } from '@angular/core';
import { Verdura } from '../app.component';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class VerdurasComponent implements OnInit {
  public titulo = 'Verduleria S.A.V.A';
  public verduras: Verdura[] = [];

  ngOnInit(): void {
  this.verduras = [
    {
      titulo: 'Lechuga',
        subtitulo: '$500 x Kg',
        image: "../assets/verduras/Lechuga.png",
        peso: 0,
        precio: 500
      },
      {
        titulo: 'Papa',
        subtitulo: '$250 x Kg',
        image: "../assets/verduras/Papa.png",
        peso: 0,
        precio: 250
      },
      {
        titulo: 'Puerro',
        subtitulo: '$400 x Atado',
        image: "../assets/verduras/Puerro.png",
        peso: 0,
        precio: 400
      },
      {
        titulo: 'Tomate',
        subtitulo: '$600 x Kg',
        image: "../assets/verduras/Tomate.png",
        peso: 0,
        precio: 600
      },
      {
        titulo: 'Zanahoria',
        subtitulo: '$250 x Kg',
        image: "../assets/verduras/Zanahoria.png",
        peso: 0,
        precio: 250
      },
      {
        titulo: 'Cebolla',
        subtitulo: '$300 x Kg',
        image: "../assets/verduras/Cebolla.png",
        peso: 0,
        precio: 300
      },
      {
        titulo: 'Pimiento',
        subtitulo: '$900 x Kg',
        image: "../assets/verduras/Pimiento.png",
        peso: 0,
        precio: 900
      },
      {
        titulo: 'Berenjena',
        subtitulo: '$700 x Kg',
        image: "../assets/verduras/Berenjena.png",
        peso: 0,
        precio: 700
      },
      {
        titulo: 'Palta',
        subtitulo: '$1100 x Kg',
        image: "../assets/verduras/Palta.png",
        peso: 0,
        precio: 1100
      },
      {
        titulo: 'Remolacha',
        subtitulo: '$450 x Kg',
        image: "../assets/verduras/Remolacha.png",
        peso: 0,
        precio: 450
    },
  ];
 }
}
