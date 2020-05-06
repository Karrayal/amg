import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
@NgModule({
	
    
  
  
  imports: [
    
	BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
  	AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  declarations:  [ AppComponent, RegistrationComponent, LoginComponent, HomeComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
