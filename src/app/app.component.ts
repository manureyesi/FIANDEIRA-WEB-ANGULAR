import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIANDEIRA-WEB-ANGULAR';

  ocultar = "style='visibility: hidden;'";

  menuOculto : boolean;
  divGeneralOculto : boolean;

  constructor () {

    this.menuOculto = true;
    this.divGeneralOculto = false;

  }

  desocultarMenu() {

    console.log("Funcion");

    this.menuOculto = false;
    this.divGeneralOculto = true;

  }

}
