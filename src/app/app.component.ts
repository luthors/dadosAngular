import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dadoIzquierda = '../assets/dice1.png';
  dadoDerecha = '../assets/dice4.png';
  numeroUno: number=1;
  numeroDos: number=0;

  tirarDados():void{
    this.numeroUno=Math.round(Math.random()*5)+1;
    this.numeroDos=Math.round(Math.random()*5)+1;
    console.log(this.numeroUno);
    console.log(this.numeroDos);
    this.dadoIzquierda = '../assets/dice'+this.numeroUno+'.png';
    this.dadoDerecha = '../assets/dice'+this.numeroDos+'.png';
  }
}
