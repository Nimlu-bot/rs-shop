import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
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
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('categoriesState', CategoriesReducer),
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
  ],
})
export class CoreModule {}
