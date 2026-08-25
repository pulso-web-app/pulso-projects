import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPlaceholderComponent } from './projects-placeholder.component';

describe('ProjectsPlaceholderComponent', () => {
  let fixture: ComponentFixture<ProjectsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPlaceholderComponent);
    fixture.detectChanges();
  });

  it('renders the Projects placeholder content', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Projetos');
    expect(element.textContent).toContain(
      'Seu espaço de projetos está tomando forma.',
    );
    expect(element.textContent).toContain('Em breve');
  });

  it('uses a semantic main region without false actions', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(
      element.querySelector('main[aria-labelledby="projects-title"]'),
    ).toBeTruthy();
    expect(element.querySelectorAll('button, a')).toHaveLength(0);
  });
});
