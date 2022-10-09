import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Atomic-code';

  constructor(private router: Router, private scroller: ViewportScroller) {}

  verCV() {
    window.location.assign('https://atomic-code-api.herokuapp.com/cv');
  }

  // navigate(where: string) {
  //   this.router.navigateByUrl(where);
  //   this.scroller.scrollToAnchor('content');
  // }
  navigate(where: string) {
    this.router.navigateByUrl(where);
    document.getElementById('content')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  ngOnInit(): void {
    AOS.init();
  }
}
