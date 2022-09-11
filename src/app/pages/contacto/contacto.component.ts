import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/shared/mail.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
 
  public mailName: String = '';
  public mailMail: String = '';
  public mailText: String = '';

  constructor(private mailService: MailService) {}

  sendMail() {
    let text = `
    Nombre: ${this.mailName}
    Correo: ${this.mailMail}

    Mensaje: ${this.mailText}
    `

    this.mailService.sendMail(text).subscribe((data:any) => {
      console.log(data);
    })
  }

  ngOnInit(): void {}
}
