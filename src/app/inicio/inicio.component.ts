import { Component, OnInit } from '@angular/core';
import { Fruta, Verdura } from '../app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public titulo = 'Verduleria S.A.V.A';
  public frutas: Fruta[] = [];
  public verduras: Verdura[] = [];

  ngOnInit(): void {
    this.frutas = [
      {
        titulo: 'Banana',
        subtitulo: '$500 x Kg',
        image: "../assets/Frutas/Banana.png",
        peso: 0,
        precio: 500
      },
      {
        titulo: 'Durazno',
        subtitulo: '$350 x Kg',
        image: "../assets/Frutas/Durazno.png",
        peso: 0,
        precio: 350
      },
      {
        titulo: 'Manzana',
        subtitulo: '$600 x Kg',
        image: "../assets/Frutas/Manzana.png",
        peso: 0,
        precio: 600
      },
      {
        titulo: 'Naranja',
        subtitulo: '$400 x Kg',
        image: "../assets/Frutas/Naranja.png",
        peso: 0,
        precio: 400
      },
      {
        titulo: 'Mandarina',
        subtitulo: '$750 x Kg',
        image: "../assets/Frutas/Mandarina.png",
        peso: 0,
        precio: 450
      },
      {
        titulo: 'Kiwi',
        subtitulo: '$850 x Kg',
        image: "../assets/Frutas/Kiwi.png",
        peso: 0,
        precio: 450
      },
      {
        titulo: 'Frutilla',
        subtitulo: '$1000 x Kg',
        image: "../assets/Frutas/Frutilla.png",
        peso: 0,
        precio: 450
      },
      {
        titulo: 'Sandia',
        subtitulo: '$1500 x Kg',
        image: "../assets/Frutas/Sandia.png",
        peso: 0,
        precio: 450
      },
      {
        titulo: 'Piña',
        subtitulo: '$1200 x Kg',
        image: "../assets/Frutas/Piña.png",
        peso: 0,
        precio: 450
      },
      {
        titulo: 'Pera',
        subtitulo: '$450 x Kg',
        image: "../assets/Frutas/Pera.png",
        peso: 0,
        precio: 450
      },
    ];

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
        precio: 250
      },
      {
        titulo: 'Pimiento',
        subtitulo: '$900 x Kg',
        image: "../assets/verduras/Pimiento.png",
        peso: 0,
        precio: 250
      },
      {
        titulo: 'Berenjena',
        subtitulo: '$700 x Kg',
        image: "../assets/verduras/Berenjena.png",
        peso: 0,
        precio: 250
      },
      {
        titulo: 'Palta',
        subtitulo: '$1100 x Kg',
        image: "../assets/verduras/Palta.png",
        peso: 0,
        precio: 250
      },
      {
        titulo: 'Remolacha',
        subtitulo: '$450 x Kg',
        image: "../assets/verduras/Remolacha.png",
        peso: 0,
        precio: 250
      },
    ];
  }
}