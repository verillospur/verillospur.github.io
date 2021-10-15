// 
//  welcome_msg.js
//  ~/framework/
// 
//  created:    2021-10-15
// 
//  output basic app welcome message
// 
'use strict';

// imports
const config = require('../config-root');
const log = require('../log');

const show_msg = () => {
    
  log.log('-=[ Welcome to Sediment ]=-');
  log.log(' =[ version: 0.1a ]=');
  log.log(' =[ author: verillospur ]=');
  log.log('~~~~~~~~~~~~~~~~~~~~|~~~~~~~');
  log.log(`Test config value: [${config.defaults.atom_id}]`);
};

// export public interface
module.exports = {
  show_msg: show_msg
};