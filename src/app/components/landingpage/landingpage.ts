import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";

@Component({
  selector: 'app-landingpage',
  imports: [Hero, AboutMe],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {}
