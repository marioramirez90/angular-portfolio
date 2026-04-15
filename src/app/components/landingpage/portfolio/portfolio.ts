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
      discription:'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link:'https://marioramirez.developerakademie.net/pokedex/index.html',
      github:'https://github.com/marioramirez90/Pokedex',
    },
      {
      image:'img/projects-image/pollo-loco.png',
      projectName: 'Pollo-loco',
      technologies:['HTML','CSS','JavaScript'],
      discription:'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      link:'https://marioramirez.developerakademie.net/Pollo-loco/index.html',
      github:'https://github.com/marioramirez90/el-poll-loco',
    },
    {
      image:'img/projects-image/join.png',
      projectName: 'Join',
      technologies:['Angular','TypeScript','HTML','CSS','Firebase'],
      discription:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link:'https://marioramirez.developerakademie.net/Pollo-loco/index.html',
      github:'https://github.com/marioramirez90/el-poll-loco',
    },
  ]
}
