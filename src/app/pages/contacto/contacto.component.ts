import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/shared/mail.service';
import { NotificationService } from 'src/app/shared/notification.service';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  public mailName: String = '';
  public mailMail: String = '';
  public mailText: String = '';

  constructor(
    private mailService: MailService,
    private notificationService:NotificationService
  ) {}

  sendMail() {
    let text = `
    Nombre: ${this.mailName}
    Correo: ${this.mailMail}

    Mensaje: ${this.mailText}
    `;

    this.mailService.sendMail(text).subscribe((data: any) => {
      console.log(data);

      if (data.error) {
        this.notificationService.error('No se ha podido dejar el mensaje')
      } else {
        this.notificationService.success('Mensaje enviado correctamente')
      }
    });
  }

  ngOnInit(): void {}
}
