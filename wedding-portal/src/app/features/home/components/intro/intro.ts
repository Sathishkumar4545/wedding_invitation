import { Component, HostListener } from '@angular/core';
import { HERO_DATA } from '../../../../core/constants/hero.data';
import { MusicService } from '../../../../services/music.service';

type InvitationLanguageKey = 'english' | 'tamil';

interface InvitationLanguage {
  key: InvitationLanguageKey;
  label: string;
  heading: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss'
})
export class Hero {
    constructor(
    private musicService: MusicService
  ) {}
  readonly hero = HERO_DATA;

  readonly invitationLanguages: InvitationLanguage[] = [
    {
      key: 'english',
      label: 'English',
      heading: 'English Invitation',
      images: [
        { src: 'assets/images/invitation/English_head.jpg', alt: 'English invitation heading' },
        { src: 'assets/images/invitation/English.jpg', alt: 'English invitation page' },
      ],
    },
    {
      key: 'tamil',
      label: 'Tamil',
      heading: 'Tamil Invitation',
      images: [
        { src: 'assets/images/invitation/Tamil_head.jpg', alt: 'Tamil invitation heading' },
        { src: 'assets/images/invitation/Tamil1.jpg', alt: 'Tamil invitation page one' },
        { src: 'assets/images/invitation/Tamil2.jpg', alt: 'Tamil invitation page two' },
      ],
    },
  ];

  showInvitation = false;
  selectedLanguage: InvitationLanguageKey | null = null;
  selectedImage: { src: string; alt: string } | null = null;

  openInvitation(): void {
    this.showInvitation = true;
    this.musicService.play();
  }

  toggleInvitation(): void {
    this.showInvitation = !this.showInvitation;
    if (!this.showInvitation) {
      this.selectedLanguage = null;
      this.selectedImage = null;
    }
  }

  selectLanguage(language: InvitationLanguageKey): void {
    this.selectedLanguage = language;
  }

  openImage(image: { src: string; alt: string }): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  get activeInvitation(): InvitationLanguage | undefined {
    return this.invitationLanguages.find(language => language.key === this.selectedLanguage);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedImage) {
      this.closeImage();
    } else if (this.showInvitation) {
      this.toggleInvitation();
    }
  }
}
