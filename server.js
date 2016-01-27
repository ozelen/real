import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './routes'

const express = require('express');
const React = require('react');
const Router = require('react-router');
const app = express();

app.use(serve);
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
      res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
    } else {
      res.status(404).send('Fuck')
    }
  });
}



// var routes = require('./routes')

// var app = express()

// // ...express config...

// app.use(function(req, res, next) {
//   var router = Router.create({location: req.url, routes: routes})
//   router.run(function(Handler, state) {
//     var html = React.renderToString(<Handler/>)
//     return res.render('react_page', {html: html})
//   })
// });

// app.listen(3000);