import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { WEDDING_DETAILS } from '../../../../core/constants/wedding.constants';


@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Countdown implements OnInit {

  readonly days = signal(0);
  readonly hours = signal(0);
  readonly minutes = signal(0);
  readonly seconds = signal(0);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);


  private readonly weddingDate = WEDDING_DETAILS.weddingDate;

  ngOnInit(): void {

    // Do nothing while rendering on the server
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateCountdown();

    const interval = window.setInterval(() => {
      this.updateCountdown();
    }, 1000);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  private updateCountdown(): void {

    const difference =
      this.weddingDate.getTime() - Date.now();

    if (difference <= 0) {
      return;
    }

    this.days.set(Math.floor(difference / (1000 * 60 * 60 * 24)));
    this.hours.set(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.minutes.set(Math.floor((difference / (1000 * 60)) % 60));
    this.seconds.set(Math.floor((difference / 1000) % 60));
  }
}
