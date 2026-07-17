import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Countdown } from './components/countdown/countdown';
import { Events } from './components/events/events';
import { Contact } from './components/contact/contact';
import { Story } from './components/story/story';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  Navbar,
  Hero,
  Countdown,
  Story,
  Events,
  Contact,
  FooterComponent
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
