import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardbody',
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.scss']
})
export class CardbodyComponent implements OnInit {
  public image = [
    {
      nombre: 'DUELO DE MOUNSTROS',
      descripcion: 'La primera versión real del juego de cartas Duelo de Monstruos fue Yu-Gi-Oh! Juego de Cartas de Bandai, publicado por Bandai en septiembre de 1998. Sólo tres Sobres de Expansión fueron comercializados antes de que la licencia para producir un juego de cartas fuera vendido a Konami. Este juego nunca fue publicado fuera de Japón. Los videojuegos de Yu-Gi-Oh! Monster Capsule Breed and Battle y Yu-Gi-Oh! Duel Monsters desarrollados por Konami incluyeron cartas de promoción de Duel Monsters, que no son parte de la versión posterior de Konami de Duel Monsters.',
      fuente: 'https://yugioh.fandom.com/es/wiki/Duelo_de_Monstruos '
    }
   ]

  constructor() { }

  ngOnInit() {
  }

}
