/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/
 trustProxy: true,
  middleware: {
    passportInit    : require('passport').initialize(),
passportSession : require('passport').session(),
    
    order: [
           'cookieParser',
           'session',
           'passportInit',
           'passportSession',
           'bodyParser',
           'compress',
           'poweredBy',
           'router',
           'www',
           'favicon',
         ],

    bodyParser: (function _configureBodyParser(){
      var skipper = require('skipper');
      var middlewareFn = skipper({ strict: true });
      return middlewareFn;
    })(),

  },

};
