/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Layout Elements
 *    
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (link to LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
    const {
        ALIGN_VALUES, 
        DEFAULT_PROPERTIES,
        DISPLAY_VALUES,
        TRANSFORM_VALUES,
    } = require("../default/default");
    const { isValidColor } = require("../color/color");

// Layout
    // Layout Properties
        class LAYOUT_PROPERTIES extends DEFAULT_PROPERTIES {
            constructor(props) {
                super(props);
                
            }
        }
        
    //  Address
        function Address(props) {
            try {
                (props instanceof DEFAULT_PROPERTIES) ? (this.props = props) : (this.props = new DEFAULT_PROPERTIES(props));
                return `<address ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${(this.props.style === undefined) ? (``) : (`style="${this.props.style}"`)}>${this.props.content}</address>`;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }
    
    // Article
    // Aside
    // Container
    // Figure
    // Footer
    // Grid
    // Header
    // Heading Group
    // Item
    // Main
    // Nav
    // Section
    // ?Hidden (maybe attribute)
    // ?Color Section (maybe attribute)

    // Export Layout
        module.exports = {

        };
