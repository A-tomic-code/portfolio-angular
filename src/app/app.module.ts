import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobremiComponent } from './pages/sobremi/sombremi.component';
import { MitrabajoComponent } from './pages/mitrabajo/mitrabajo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ButtonGitComponent } from './components/form-controls/button-git/button-git.component';
import { NgParticlesModule } from 'ng-particles';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobremiComponent,
    MitrabajoComponent,
    ContactoComponent,
    CardProjectComponent,
    ButtonGitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgParticlesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
