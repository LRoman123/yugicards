import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public image = [
    {
      url: '/assets/images/dragon_blanco.jpg',
      nombre: 'Dragon blanco',
    },
    {
     url: '/assets/images/obelisco.jpg',
     nombre: 'Obelisco el atormentador',
    },
    {
     url: '/assets/images/slifer.jpg',
     nombre: 'Slifer el dragon del cielo',
    },
    {
     url: '/assets/images/dragon_alado.jpg',
     nombre: 'Dragon alado de Ra',
    },
    {
      url: '/assets/images/mago_oscuro.jpg',
      nombre: 'Mago Oscuro',
     },
     {
       url: '/assets/images/guardian.jpg',
       nombre: 'Guardian de la reja',
      }
   ]

  constructor() {
    for (const iterator of this.image) {
      console.log(iterator);
    }
   }

  ngOnInit() {
  }

}
