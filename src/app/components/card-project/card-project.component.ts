import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() info:any;
  @Output() onClickGitHub = new EventEmitter<string>;

  constructor() { }

  goGitHub(){
    this.onClickGitHub.emit(this.info.git_url)
  }

  ngOnInit(): void {
  }

}
