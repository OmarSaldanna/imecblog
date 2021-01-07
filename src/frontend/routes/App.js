import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// containers para rutas, ir a routes/serverRoutes.js
import Blog from '../containers/Blog';
import Layout from '../containers/Layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
