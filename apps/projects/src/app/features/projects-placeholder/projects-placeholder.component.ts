import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pulso-projects-placeholder',
  templateUrl: './projects-placeholder.component.html',
  styleUrl: './projects-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPlaceholderComponent {}
