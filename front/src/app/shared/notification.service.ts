import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

export class NotificationService {
  constructor(
    private toast: ToastrService
    ) {}

  
  success(text: string) {
    this.toast.success(text, '', {positionClass: 'toast-bottom-right'});
  }
  error(text: string) {
    this.toast.error(text, '', {positionClass: 'toast-bottom-right'});
  }
  info(text: string) {
    this.toast.info(text, '', {positionClass: 'toast-bottom-right'});
  }
  warning(text: string) {
    this.toast.warning(text, '', {positionClass: 'toast-bottom-right'});
  }
}