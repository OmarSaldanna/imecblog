// cosas para el servidor
import express from 'express';
import config from './config'; // configuraciones del servidor
import webpack from 'webpack';

// un paquete para seguridad
import helmet from 'helmet';

// cosas de react y el enrutador
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../frontend/routes/serverRoutes';

// el layout no se ve, asi que hay que agregarlo aqui
import Layout from '../frontend/containers/Layout';

// importamos la config, en si las variables de entorno
const { env, port } = config;

// funcion para leer el manifest.json
import getManifest from './getManifest';

// creamos el servidor
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
// en caso de estar en produccion
else {
  app.use((req, res, next) => {
    // si no lee por default el manifest, que lo lea
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  // esto nos ayudara a que el bundle se vaya guardando en ./public/
  app.use(express.static(`${__dirname}/public`));
  // usamos el paquete para seguridad
  app.use(helmet());

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'sha256-lKtLIbt/r08geDBLpzup7D3pTCavi4hfYSO45z98900='"],
        'img-src': ["'self'", 'https://res.cloudinary.com'],
        'style-src-elem': ["'self'", 'https://fonts.googleapis.com'],
        'font-src': ['https://fonts.gstatic.com'],
        'media-src': ['*'],
      },
    }),
  );

  // bloqueamos los cross domain polices
  app.use(helmet.permittedCrossDomainPolicies());
  // quita algunos headers de info del servidor, por seguridad
  app.disable('xd-powered-by');
}


const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest['vendors.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="icon" href="https://res.cloudinary.com/imec-blog/image/upload/v1610169169/njru3bfbu5jpoxqfxfpa.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>IMEC Blog</title>
      <link rel="stylesheet" href="${mainStyles}" type="text/css" /> 
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="${mainBuild}" type="text/javascript"></script
      <script src="${vendorBuild}" type="text/javascript"></script
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
  res.removeHeader('x-powered-by'); // solucion a un error
  res.send(setResponse(html, req.hashManifest));
};

// respuesta del servidor para las ruta
app.get('*', renderApp) 

// dejamos el servidor a la escucha
app.listen(port, (err) => {
  if (err) console.log(err)
  else console.log(`Server running on port ${port}`);
});