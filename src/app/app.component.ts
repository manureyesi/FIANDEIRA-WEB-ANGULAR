import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FIANDEIRA-WEB-ANGULAR';

  ocultar = "style='visibility: hidden;'";
  menuOculto$: Observable<boolean>;

  constructor () {}

  ngOnInit() {
    this.menuOculto$ = true;
    //https://desarrolloweb.com/articulos/practica-observables-angular.html
  }

  desocultarMenu() {

    console.log("Funcion: desocultarMenu");

    this.menuOculto$ = false;

  }

}
