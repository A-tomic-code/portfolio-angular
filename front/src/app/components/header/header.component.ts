import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  showSection(tabIndex:number){

    let target = '';

    switch (tabIndex){

      case 0:
        target = '';
        break;
      case 1:
        target = 'mitrabajo';
        break;
      case 2:
        target = 'contacto'
          break;
          
    }
        
    this.router.navigateByUrl(target);

  }
}
