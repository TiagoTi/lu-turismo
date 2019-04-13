import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent} from './menu/menu.component';
import { HeaderComponent} from './header/header.component';
import { PageNotFoundComponent } from './etc/page-not-found.component';
import { FooterComponent} from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ArticleComponent } from './article/article.component';
import { ViagensComponent } from './viagens/viagens.component';
import { AsideComponent } from './aside/aside.component';
import { ViagemComponent } from './viagem/viagem.component';
import { VideoComponent } from './video/video.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { VideosComponent } from './videos/videos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DestinosComponent } from './destinos/destinos.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'galeria-fotos', component: GaleriaFotosComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BannerComponent,
    ArticleComponent,
    ViagensComponent,
    AsideComponent,
    ViagemComponent,
    VideoComponent,
    ComentarioComponent,
    VideosComponent,
    ComentariosComponent,
    DestinosComponent,
    GaleriaFotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
