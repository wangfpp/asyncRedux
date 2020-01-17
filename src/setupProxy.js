const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/drv', { target: 'http://172.16.1.61:2081' }));
  app.use(proxy('/usr', { target: 'http://172.16.1.61:2081' }));
  app.use(proxy('/attendance', {target: 'http://172.16.1.61:2001'})),
  app.use(proxy('/interact', {target: 'http://172.16.1.61:2001'}))
};