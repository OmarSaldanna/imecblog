// rutas para el server, ir a routes/App.js
import Blog from '../containers/Blog';

const routes = [
  {
    exact: true,
    path: '/blog',
    component: Blog,
  },
  {
    name: 'Not Found',
    component: Blog,
  }
];

export default routes;
