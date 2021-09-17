import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AngularDropdownModule } from 'angular-dropdown';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { CategoriesComponent } from './components/header/categories/categories.component';
import { ProfileComponent } from './components/header/navigation/profile/profile.component';
import { InformationComponent } from './components/header/information/information.component';
import { LocationComponent } from './components/header/information/location/location.component';
import { ContactsComponent } from './components/header/information/contacts/contacts.component';
import { WorkTimeComponent } from './components/header/information/work-time/work-time.component';
import { CategoriesReducer } from '../redux/reducers/categories.reducer';
import { MoreContactsComponent } from './components/header/information/more-contacts/more-contacts.component';
import { LoginComponent } from './components/header/navigation/login/login.component';
import { FrontReducer } from '../redux/reducers/front.reducer';
import { ModalComponent } from './components/modal/modal.component';
import { AuthReducer } from '../redux/reducers/auth.reducer';
import { SearchComponent } from './components/header/navigation/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CategoriesComponent,
    ProfileComponent,
    InformationComponent,
    LocationComponent,
    ContactsComponent,
    WorkTimeComponent,
    MoreContactsComponent,
    LoginComponent,
    ModalComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularDropdownModule,
    StoreModule.forFeature('categoriesState', CategoriesReducer),
    StoreModule.forFeature('frontState', FrontReducer),
    StoreModule.forFeature('authState', AuthReducer),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CategoriesComponent,
    ProfileComponent,
    InformationComponent,
    LocationComponent,
    ContactsComponent,
    WorkTimeComponent,
    LoginComponent,
    ModalComponent,
  ],
})
export class CoreModule {}
