import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects = [
    {
      image:'img/projects-image/pokedex.png',
      projectName: 'Pokedex',
      technologies:['HTML','CSS','JavaScript'],
      descriptionKey:'PROJECTS.POKEDEX_DESC',
      link:'https://marioramirez.developerakademie.net/pokedex/index.html',
      github:'https://github.com/marioramirez90/Pokedex',
    },
      {
      image:'img/projects-image/pollo-loco.png',
      projectName: 'Pollo-loco',
      technologies:['HTML','CSS','JavaScript'],
      descriptionKey:'PROJECTS.POLLO_DESC',
      link:'https://marioramirez.developerakademie.net/Pollo-loco/index.html',
      github:'https://github.com/marioramirez90/el-poll-loco',
    },
    {
      image:'img/projects-image/join.png',
      projectName: 'Join',
      technologies:['Angular','TypeScript','HTML','CSS','Firebase'],
      descriptionKey:'PROJECTS.JOIN_DESC',
      link:'https://marioramirez.developerakademie.net/Pollo-loco/index.html',
      github:'https://github.com/marioramirez90/el-poll-loco',
    },
  ]
}
