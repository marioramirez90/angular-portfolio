import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";
import { MySkills } from "./my-skills/my-skills";

@Component({
  selector: 'app-landingpage',
  imports: [Hero, AboutMe, MySkills],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {}
