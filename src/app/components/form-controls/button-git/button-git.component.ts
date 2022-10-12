import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-button-git',
  templateUrl: './button-git.component.html',
  styleUrls: ['./button-git.component.css']
})

export class ButtonGitComponent implements OnInit {
  
  @Input() info: Project

  constructor() { }

  ngOnInit(): void {
  }

}
