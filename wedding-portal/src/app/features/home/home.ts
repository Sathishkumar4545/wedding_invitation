import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Countdown } from './components/countdown/countdown';
import { Events } from './components/events/events';
import { Story } from './components/story/story';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  Navbar,
  Hero,
  Countdown,
  Story,
  Events
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
