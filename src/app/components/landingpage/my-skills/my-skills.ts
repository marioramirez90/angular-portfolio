import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
 skills = [
  { name: 'HTML', image: 'img/icons/html.svg' },
  { name: 'CSS', image: 'img/icons/css.svg' },
  { name: 'JavaScript', image: 'img/icons/javascript.svg' },
  { name: 'TypeScript', image: 'img/icons/typescript.svg' },
  { name: 'Angular', image: 'img/icons/angular.svg' },
  { name: 'Git', image: 'img/icons/git.svg' },
  { name: 'REST API', image: 'img/icons/rest-api.svg' },
];
}
