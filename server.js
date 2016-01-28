import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'
import statics from 'serve-static';

const express = require('express');
const React = require('react');
const Router = require('react-router');
const app = express();

app.use(statics('dist'));
app.use(serve);
app.set('view engine', 'jade');
app.set('views', 'views');
app.listen(3000);

function serve (req, res) {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    console.log(req.url);
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).render('index', {html: renderToString(<RouterContext {...renderProps} />), props: '{}'})
    } else {
      res.status(404).send('Not found')
    }
  });
}