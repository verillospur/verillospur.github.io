// 
//  atom.js
//  ~/sediment/
// 
//  created:    2021-10-03
// 
//  atom creating machine
// 
'use strict';

const config = require('./config');
const position = require('./position');
const size = require("./size");

// create atom with default id and pos
const get_default_atom = () => {
    const default_atom = get_atom(
        config.defaults.atom_id,
        config.defaults.atom_x,
        config.defaults.atom_y,
        config.defaults.atom_z
    );
    return default_atom;
};

// core atom generator
const get_atom = (id, x, y, z) => {
    const atom = {
        id: id,
        position: new position(x, y, z),
        size: new size(
            config.defaults.atom_width,
            config.defaults.atom_height,
            config.defaults.atom_depth
        ),
    };
    return atom;
};

// exports
module.exports = {
    create: get_atom,
    createWithDefaults: get_default_atom,
};