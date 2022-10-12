import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit, AfterViewInit {
  @Input() info: any;
  @Output() onClickGitHub = new EventEmitter<string>();

  @ViewChild('img') img: ElementRef;

  constructor(private renderer: Renderer2) {

    
  }
  
  goGitHub() {
    this.onClickGitHub.emit(this.info.giturl);
  }
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
    this.renderer.setStyle(this.img.nativeElement, 'background-image', `url(${this.info.img})`)
  }
}
