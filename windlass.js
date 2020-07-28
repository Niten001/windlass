/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0
 *    
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
const Components = require("./components/components");
const Extensions = require("./extensions/extensions");
const Structures = require("./structures/structures");
const Templates = require("./templates/templates");
const Utilities = require("./utilities/utilities");

// Export Windlass
const Windlass = {
    Components,
    Extensions,
    Structures,
    Templates,
    Utilities,
};

module.exports = Windlass;
