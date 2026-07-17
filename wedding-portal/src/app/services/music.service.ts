import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {

  private audio?: HTMLAudioElement;

  register(audio: HTMLAudioElement): void {
    this.audio = audio;
  }

  play(): void {
    this.audio?.play().catch(() => {});
  }

  pause(): void {
    this.audio?.pause();
  }

  toggle(): void {
    if (!this.audio) return;

    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  get playing(): boolean {
    return !!this.audio && !this.audio.paused;
  }
}
