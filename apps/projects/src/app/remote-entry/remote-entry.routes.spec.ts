import { ProjectsPlaceholderComponent } from '../features/projects-placeholder/projects-placeholder.component';
import { PROJECTS_ROUTES } from './remote-entry.routes';

describe('PROJECTS_ROUTES', () => {
  it('loads the Projects placeholder at the remote root', async () => {
    const rootRoute = PROJECTS_ROUTES[0];

    expect(rootRoute.path).toBe('');
    expect(rootRoute.pathMatch).toBe('full');

    const loadComponent = rootRoute.loadComponent as () => Promise<unknown>;

    await expect(loadComponent()).resolves.toBe(ProjectsPlaceholderComponent);
  });
});
