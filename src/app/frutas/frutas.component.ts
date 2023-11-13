import { Component, OnInit } from '@angular/core';
import { Fruta } from '../app.component';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})

export class FrutasComponent implements OnInit {
  public titulo = 'Verduleria S.A.V.A';
  public frutas: Fruta[] = [];

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
        precio: 750
      },
      {
        titulo: 'Kiwi',
        subtitulo: '$850 x Kg',
        image: "../assets/Frutas/Kiwi.png",
        peso: 0,
        precio: 850
      },
      {
        titulo: 'Frutilla',
        subtitulo: '$1000 x Kg',
        image: "../assets/Frutas/Frutilla.png",
        peso: 0,
        precio: 1000
      },
      {
        titulo: 'Sandia',
        subtitulo: '$1500 x Kg',
        image: "../assets/Frutas/Sandia.png",
        peso: 0,
        precio: 1500
      },
      {
        titulo: 'Piña',
        subtitulo: '$1200 x Kg',
        image: "../assets/Frutas/Piña.png",
        peso: 0,
        precio: 1200
      },
      {
        titulo: 'Pera',
        subtitulo: '$450 x Kg',
        image: "../assets/Frutas/Pera.png",
        peso: 0,
        precio: 450
      },
    ];
  }
}
