import { Component, OnInit } from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

 
public image = [
 {
   url: '/assets/images/dragon_blanco.jpg',
   nombre: 'Dragon blanco',
   descripcion: 'Este legendario dragón es una poderosa máquina de destrucción. Virtualmente invencible, muy pocos se han enfrentado a esta impresionante criatura y han vivido para contarlo.'
 },
 {
  url: '/assets/images/obelisco.jpg',
  nombre: 'Obelisco el atormentador',
  descripcion: 'El descenso de esta poderosa criatura será proclamado por vientos ardientes y tierra retorcida. Y con la llegada de este horror, aquellos que respiran conocerán el verdadero significado del sueño eterno.'
 },
 {
  url: '/assets/images/slifer.jpg',
  nombre: 'Slifer el dragon del cielo',
  descripcion: 'Los cielos se estremecen y los truenos rugen, señalando la llegada de esta criatura antigua y el amanecer del verdadero poder.'
 },
 {
  url: '/assets/images/dragon_alado.jpg',
  nombre: 'Dragon alado de Ra',
  descripcion: 'Los espíritus cantan acerca de una poderosa criatura que gobierna sobre todo lo que es místico.'
 }
 
];
  constructor(){ 
    for (const iterator of this.image) {
      console.log(iterator);
    }
   
  }

  ngOnInit() {
  }

}
