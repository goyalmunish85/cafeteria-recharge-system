import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,MatMenuModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { FormsModule,FormBuilder } from '@angular/forms';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { MenuService } from './services/menu.service';
import { CartService } from './services/cart.service';
import { baseURL } from './shared/baseurl';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ItemdetailsComponent,
    CartComponent,
    ContactusComponent,
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,AgmCoreModule.forRoot({
      apiKey: "AIzaSyDgyyagm2swP-wXHSamodscFu9JYKABrUE",
      libraries: ["places"]
    }),
    BrowserAnimationsModule,HttpClientModule,
    FlexLayoutModule,AppRoutingModule,HttpModule,
    MatMenuModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,
    FlexLayoutModule, BrowserModule,
    FormsModule,
    HttpClientModule,RouterModule.forRoot(routes),
    
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
             MenuService,CartService,AuthenticationService, 
             AuthGuardService,
             {provide: 'BaseURL', useValue: baseURL},
             ProcessHttpmsgService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
