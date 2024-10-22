import { Injectable } from '@angular/core';
import { title } from 'process';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastNotification(title: string) {
    Swal.fire({
      position: 'center',
      title: `${title}`,
      heightAuto: true,
      timerProgressBar: false,
      padding: '0.3rem',
      width: '300px',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
