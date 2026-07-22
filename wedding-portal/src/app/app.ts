import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {

  @ViewChild('bgMusic')
  bgMusic!: ElementRef<HTMLAudioElement>;

  isPlaying = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const audio = this.bgMusic.nativeElement;

    audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.cdr.detectChanges();
    });

    audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.cdr.detectChanges();
    });

    audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.cdr.detectChanges();
    });
  }

  toggleMusic(): void {
    const audio = this.bgMusic.nativeElement;

    if (audio.paused) {
      audio.play().catch(err => console.error(err));
    } else {
      audio.pause();
    }
  }
}
