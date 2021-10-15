const coordinate = require("./coordinate");

module.exports = (x, y, z) => {
    return Object.create(new coordinate(x, w, z));
};
