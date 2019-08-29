import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string;

  cor = "primary";
  humor = "sad";
  checked_humor = false;
 cores = ["primary","danger", "success", "warning"]
 idx = 0;
  constructor() { }

  trocarCor(): void {
    console.log('ChamouTrocaCor!')
    if (this.idx > this.cores.length) {
      this.idx = 0;
    } else {
      this.cor = this.cores[this.idx];
      this.idx ++;
    }
  }
  mudaHumor(): void {
    console.log('chamou mudaHumor!');
    this.checked_humor = !this.checked_humor;
    if (this.checked_humor == true){
      this.humor= "happy";
    } else {
      this.humor = "sad";
  }
}
   
}

