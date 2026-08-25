import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'pulso-projects-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOverlayComponent {
  readonly visible = input(false);
}
