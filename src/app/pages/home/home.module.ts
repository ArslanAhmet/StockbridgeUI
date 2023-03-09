import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home.component';
import { PersonDialogComponent } from './presentational/person-dialog/person-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { personReducer } from './store/reducers/home-reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/effects';
import { ConnectService, WebSocketService } from 'src/app/@core/connect-services';

@NgModule({
  declarations: [HomeComponent, PersonDialogComponent],
  providers: [WebSocketService, ConnectService],
  imports: [
    HomeRoutingModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatNativeDateModule,
    FormsModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    StoreModule.forFeature('home', personReducer),
    EffectsModule.forFeature([HomeEffects])
  ],
  entryComponents: [
    PersonDialogComponent,
  ]
})
export class HomeModule { }
