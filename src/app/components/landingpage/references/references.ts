import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {

references = [
{
name: 'V.Schuster',
discripton: 'Mario really kept the team together with his great organization and clear communication. We wouldn t have got this far without his commitment.',
img: 'img/references/1.png'
},
{
name: 'E.Eichinger',
discripton: 'Michael really kept the team together with his great organization and clear communication. We wouldn t have got this far without his commitment.',
img: 'img/references/2.png'
},
{
name: 'I.Nuber',
discripton: 'Mario really kept the team together with his great organization and clear communication. We wouldn t have got this far without his commitment.',
img: 'img/references/3.png'
}
];

currentIndex = 0;
leftHover = false;
rightHover = false;

next() {
this.currentIndex =
(this.currentIndex + 1) % this.references.length;
}

prev() {
this.currentIndex =
(this.currentIndex - 1 + this.references.length) % this.references.length;
}

}
