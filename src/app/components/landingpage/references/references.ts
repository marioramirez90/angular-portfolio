import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {

references = [
{
name: 'V.Schuster',
descriptionKey: 'REFERENCES.REF1',
img: 'img/references/1.png'
},
{
name: 'E.Eichinger',
descriptionKey: 'REFERENCES.REF2',
img: 'img/references/2.png'
},
{
name: 'I.Nuber',
descriptionKey: 'REFERENCES.REF3',
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
