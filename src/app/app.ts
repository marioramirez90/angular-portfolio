import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landingpage } from "./components/landingpage/landingpage";
import { Header } from "./components/layout/header/header";
import { Footer } from "./components/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landingpage, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
