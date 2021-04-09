import { AuthService, AuthResponseData } from './auth.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
  const email = form.value.email;
  const password = form.value.password;
  const first_name = form.value.first_name;
  const last_name = form.value.last_name;
  const phone_number = form.value.phone_number;
  const age = form.value.age;
  const gender = form.value.gender;

  let authObs: Observable<AuthResponseData>;

  this.isLoading = true;

  if (this.isLoginMode) {
    authObs = this.authService.login(email, password);
  } else {
    authObs = this.authService.signup(email, password,first_name,last_name,phone_number,age,gender);
  }

  authObs.subscribe(
    resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/images']);
    },
    errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    }
  );

  form.reset();
}

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  private showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
