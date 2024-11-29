import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Iuser } from './../Interfaces/Iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  notifyUserSucess(Iuser: Iuser) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      width: 'auto',
    });
    Toast.fire({
      icon: 'success',
      title: `Bem vindo ${Iuser.username}`,
    });
  }

  notifyUserError(error: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      width: 'auto',
    });
    Toast.fire({
      icon: 'error',
      title: `${error}`,
    });
  }

  notifyAcademiasError(error: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      width: 'auto',
    });
    Toast.fire({
      icon: 'error',
      title: `erro em obter academias: ${error}`,
    });
  }

  notifyLogout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      width: 'auto',
    });
    Toast.fire({
      icon: 'success',
      title: `Logout realizado com sucesso`,
    });
  }
}
