import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 /* constructor( private act: ActivatedRoute,private router:Router,private authService: AuthService, private storageService: StorageService) {
  }
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password)
      .subscribe({
        next: data => {
          if(data.token){
            this.isLoginFailed = true;
            this.isLoggedIn = false;
            this.storageService.saveUser(data);
            this.roles = this.storageService.getUser().roles;
            this.router.navigate(['/agent']);
            console.log("kayn had user");

          }else {
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            console.log("makaynchi had user");
            this.reloadPage();
          }
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          console.log("machi mzyan");
        }
      });
  }

  reloadPage(): void {
    window.location.reload();
  }
*/

}
