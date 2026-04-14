import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";
import { MySkills } from "./my-skills/my-skills";
import { Portfolio } from "./portfolio/portfolio";
import { References } from "./references/references";
import { Contact } from "./contact/contact";



@Component({
  selector: 'app-landingpage',
  imports: [Hero, AboutMe, MySkills, Portfolio, References, Contact],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {}
