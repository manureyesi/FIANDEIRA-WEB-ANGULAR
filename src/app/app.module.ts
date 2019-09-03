import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FooterComponent } from './footer/footer.component';

const routes: Route[] = [
  {path: '', component: PaginaPrincipalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
