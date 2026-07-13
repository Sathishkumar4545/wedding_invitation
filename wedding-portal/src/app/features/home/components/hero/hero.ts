import { Component } from '@angular/core';
import { HERO_DATA } from '../../../../core/constants/hero.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  readonly hero = HERO_DATA;

}
