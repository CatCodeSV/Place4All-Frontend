import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Login } from 'src/app/shared/Models/login.model';
import { LoginService } from 'src/app/shared/services/LoginService/login.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private modalService: NgbModal) {}
  error = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {}

  async login() {
    var login: Login = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };

    this.loginService.login(login).subscribe((res: any) => {
      if (!res) {
        this.error = true;
      }
      this.loginService.setToken(res.token);
      this.loginService.setUser(res.usuario);
      this.modalService.dismissAll();
    });
  }

  openRegister() {
    this.modalService.dismissAll();
    this.modalService.open(RegisterComponent, {
      centered: true,
      size: 'xl',
    });
  }
}
