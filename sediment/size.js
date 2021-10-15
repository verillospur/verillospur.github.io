const coordinate = require("./coordinate");

module.exports = (w, h, d) => {
    return Object.create(new coordinate(w, h, d));
};
