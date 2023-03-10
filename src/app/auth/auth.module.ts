import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ToastrModule } from 'ngx-toastr';
const COMPONENTS = [LoginComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule { }
