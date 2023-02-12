import {AuthPage, LoginPage, RegisterPage, SplashPage} from '../../../pages';
import {
  AUTH_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  SPLASH_PAGE,
} from '../../../parameters';

export const authPage = [
  {
    name: SPLASH_PAGE,
    component: SplashPage,
  },
  {
    name: AUTH_PAGE,
    component: AuthPage,
  },
  {
    name: REGISTER_PAGE,
    component: RegisterPage,
  },
];
