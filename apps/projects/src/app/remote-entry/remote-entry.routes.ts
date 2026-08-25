import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        '../features/projects-placeholder/projects-placeholder.component'
      ).then(
        ({ ProjectsPlaceholderComponent }) => ProjectsPlaceholderComponent,
      ),
  },
];
