import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private varMostrarMenu$ = new Subject<boolean>();
  private mostrarMenu : boolean = false;
  
  constructor () {
    this.mostrarMenu = false;
  }

  public getEstadoMenu$(): Observable<boolean> {
    return this.varMostrarMenu$.asObservable();
  }

  public setEstadoMenu(estadoMenu: boolean): void {
    this.mostrarMenu = estadoMenu;
    this.varMostrarMenu$.next(this.mostrarMenu);
  }

}
