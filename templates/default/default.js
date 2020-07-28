/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Default Template
 *    
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

class DEFAULT_TEMPLATE_PROPERTIES {
    constructor(props) {
        // content
        try {
            if (props.content === undefined) {
                this.content = "";
            } else if ((typeof props.content === "string") || (props.content instanceof String)) {
                this.content = String.raw`${props.content}`;
            } else {
                throw new TypeError(`${props.content} on DEFAULT_TEMPLATE_PROPERTIES.content is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // description
        try {
            if (props.description === undefined) {
                this.description = "";
            } else if ((typeof props.description === "string") || (props.description instanceof String)) {
                this.description = props.description;
            } else {
                throw new TypeError(`${props.description} on DEFAULT_TEMPLATE_PROPERTIES.description is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // lang
        try {
            if (props.lang === undefined) {
                this.lang = "en";
            } else if ((typeof props.lang === "string") || (props.lang instanceof String)) {
                this.lang = props.lang;
            } else {
                throw new TypeError(`${props.lang} on DEFAULT_TEMPLATE_PROPERTIES.lang is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // title
        try {
            if (props.title === undefined) {
                this.title = "";
            } else if ((typeof props.title === "string") || (props.title instanceof String)) {
                this.title = props.title;
            } else {
                throw new TypeError(`${props.title} on DEFAULT_TEMPLATE_PROPERTIES.title is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }
    }
}

function DefaultTemplate(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof DEFAULT_TEMPLATE_PROPERTIES) ? (this.props = props) : (this.props = new DEFAULT_TEMPLATE_PROPERTIES(props));
            return `
                <!DOCTYPE html>
                <html lang="${this.props.lang}">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="description" content="${this.props.description}" />
                        <meta name="title" content="${this.props.title}" />
                        <title>` + this.props.title + `</title>
                    </head>
                    <body>${this.props.content}</body>
                </html>
            `;
        } else {
            throw new TypeError(`${props} on Text is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    DEFAULT_TEMPLATE_PROPERTIES,
    DefaultTemplate,
};
