const PROXY_CONFIG = [
  {
    context:['/api'],
    target: 'http://localhost:8080/api',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;


