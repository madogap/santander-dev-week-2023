import { inject} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('email')) {
    console.log(route);
    console.log(state);
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
