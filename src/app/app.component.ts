import { Component , OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FIANDEIRA-WEB-ANGULAR';

  ocultar = "style='visibility: hidden;'";

  varEstadoMenu$: Observable<boolean>;
  menuOculto: boolean;

  constructor (private menuEstado: MenuService) {
  }
  
  ngOnInit() {
    this.varEstadoMenu$ = this.menuEstado.getEstadoMenu$();
    this.varEstadoMenu$.subscribe(estadoMenu => this.menuOculto);
  }

}
