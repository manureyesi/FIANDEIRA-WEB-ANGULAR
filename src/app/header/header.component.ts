import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MenuService } from 'src/app/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  varEstadoMenu$: Observable<boolean>;
  menuOculto: boolean;

  constructor (private menuEstado: MenuService) {
  }
  
  ngOnInit() {
    this.varEstadoMenu$ = this.menuEstado.getEstadoMenu$();
    this.varEstadoMenu$.subscribe(estadoMenu => this.menuOculto);
  }

  desocultarMenu() {
    
    console.log("Funcion: desocultarMenu");
    console.log(this.menuOculto);
    if (this.menuOculto) {
      this.menuEstado.setEstadoMenu(false);
    } else {
      this.menuEstado.setEstadoMenu(true);
    }
    
    console.log(this.menuOculto);
    console.log("Cambiado estado a menu.");

  }

}
