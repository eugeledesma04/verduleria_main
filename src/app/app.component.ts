import { Component } from '@angular/core';

export interface Fruta {
  titulo: string;
  image?: string;
  subtitulo: string;
  peso: number;
  precio: number;
}

export interface Verdura {
  titulo: string;
  image?: string;
  subtitulo: string;
  peso: number;
  precio: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {

}