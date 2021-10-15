// 
//  config-root.js
//  ~/
// 
//  created:    2021-10-15
// 
//  root config file
// 
'use strict';

const config = () => {

    return {
        
        // config root
        root: require('./config'),

        // sediment root
        sediment: require('./sediment/config'),
        
    };
};

module.exports = config();
