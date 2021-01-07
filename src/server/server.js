// cosas para el servidor
import express from 'express';
import config from './config'; // configuraciones del servidor
import webpack from 'webpack';

// cosas de react y el enrutador
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../frontend/routes/serverRoutes';

// el layout no se ve, asi que hay que agregarlo aqui
import Layout from '../frontend/containers/Layout';

// importamos la config
const { env, port } = config;
const app = express();

// configuraciones de webpack para el modo de desarrollo
if (env == "development") {
  console.log('development mode');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  // ayuda a compilar la config de webpack
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

const setResponse = (html) => {
  return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>IMEC Blog</title>
      <link rel="stylesheet" href="assets/app.css" type="text/css" /> 
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="assets/app.js" type="text/javascript"></script
    </body>
    </html>`
  );
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Layout>
        {renderRoutes(routes)}
      </Layout>
    </StaticRouter>
  );
  res.send(setResponse(html));
};

// respuesta del servidor para las ruta
app.get('*', renderApp) 

// dejamos el servidor a la escucha
app.listen(port, (err) => {
  if (err) console.log(err)
  else console.log('Server running on port 3000');
});