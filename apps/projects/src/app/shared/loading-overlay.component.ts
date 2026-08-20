import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

@Component({
  selector: 'pulso-projects-loading-overlay',
  template: `
    @if (visible()) {
      <div class="loading-overlay" role="status" aria-live="polite" aria-label="Carregando">
        <div class="loading-panel">
          <span class="loading-spinner" aria-hidden="true"></span>
          <span>Carregando...</span>
        </div>
      </div>
    }
  `,
  styles: `
    :host { position: fixed; z-index: 1000; inset: 0; pointer-events: none; }
    .loading-overlay { display: grid; width: 100%; height: 100%; place-items: center; background: rgb(10 14 21 / 68%); backdrop-filter: blur(0.35rem); pointer-events: auto; }
    .loading-panel { display: inline-flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; border: 1px solid var(--pulso-color-border); border-radius: 0.5rem; background: var(--pulso-color-surface); box-shadow: var(--pulso-shadow-surface); color: var(--pulso-color-text); font: 0.875rem Roboto, Arial, sans-serif; }
    .loading-spinner { width: 1.25rem; height: 1.25rem; border: 0.15rem solid rgb(196 181 253 / 28%); border-top-color: var(--pulso-color-accent); border-radius: 50%; animation: spin 750ms linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) { .loading-spinner { animation-duration: 1500ms; } }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOverlayComponent {
  readonly visible = input(false);
}
