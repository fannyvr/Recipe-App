const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const spa = require('koa-spa');
const app = koa();

app.use(spa(path.join(__dirname, '../dist'),{
  index: 'index.html',
  404: '404.html',
  routeBase: '/'
}));

app.listen(3000);
console.log('server running on port 3000')