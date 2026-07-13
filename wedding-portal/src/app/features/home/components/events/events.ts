import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { EVENTS_DATA } from '../../../../core/constants/events.data';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.html',
  styleUrl: './events.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Events {

  readonly events = EVENTS_DATA;

}
