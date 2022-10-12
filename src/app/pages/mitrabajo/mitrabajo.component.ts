import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-mitrabajo',
  templateUrl: './mitrabajo.component.html',
  styleUrls: ['./mitrabajo.component.css'],
})
export class MitrabajoComponent implements OnInit {

  private sql: Project;
  private imdb: Project;
  
  allprojects: Project[] = [];

  
  constructor(private router:Router) {
    
    const mongo_desc = 'Este proyecto implementa operaciones CRUD en una base de datos MongoDB.';
    const mongo_img = '../../assets/img/project_mongo.png';
    const mongo_git_url = 'https://github.com/A-tomic-code/MongoDB';
    const mongo = new Project('CRUD MongoDB', mongo_desc, mongo_img, mongo_git_url);
    this.allprojects.push(mongo)

    const sql_desc = 'Con este proyecto podemos hacer operaciones CRUD sobre una base de datos SQL.';
    const sql_img = '../../assets/img/project_mysql.png';
    const sql_git_url = 'https://github.com/A-tomic-code/MySQL';
    const sql = new Project('CRUD MySQL', sql_desc, sql_img, sql_git_url);

    this.allprojects.push(sql);
    
    const imdb_desc = `Con este front-end podemos añadir registros de peliculas y 
      listarnos en forma de tarjetas.`;
    const imdb_img = '../../assets/img/project_imdb.png';
    const imdb_git_url = 'https://github.com/A-tomic-code/IMDB';
    const imdb = new Project('CRUD Myimdb', imdb_desc, imdb_img, imdb_git_url);
    this.allprojects.push(imdb);


  }

  goGitHub(giturl:string){
    this.router.navigateByUrl(giturl)
  }

  ngOnInit(): void {}
}
