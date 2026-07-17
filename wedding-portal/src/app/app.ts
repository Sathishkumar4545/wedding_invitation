import {
  AfterViewInit,
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

  ngAfterViewInit(): void {
    // Audio is ready
  }

  toggleMusic(): void {
    const audio = this.bgMusic.nativeElement;

    if (audio.paused) {
      audio.play()
        .then(() => this.isPlaying = true)
        .catch(err => console.error(err));
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }
}
