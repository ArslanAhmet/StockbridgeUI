import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../services/auth.service";
import { TokenStorageService } from "../../services/token-storage.service";

@Component({
  selector: "angular-login-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });
  errorMessage = "";
  isLoginFailed = false;

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // stop here if form is invalid
    if (this.loginForm?.invalid) {
      return;
    }

    this.authService
      .login(this.loginForm?.value.username, this.loginForm?.value.password)
      .subscribe(
        (result) => {
          if (result.data) {
            this.tokenStorage.saveToken(result.data.token);
            this.tokenStorage.saveUser(result.data);
            this.router.navigate(["/pages/dashboard"]);
            this.toastr.success("Login Success", "Success");
          } else {
            this.toastr.error(result.error, "Error");
          }
        },
        (err) => {
          this.errorMessage = err.error;
          this.isLoginFailed = true;
        }
      );
  }
}
