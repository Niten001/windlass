/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Default Template
 *
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

const {
  SecurityHelpers,
  StringHelpers,
  StyleHelpers,
  TypeHelpers,
} = require("../../utilities").Server;

class DEFAULT_TEMPLATE_PROPERTIES {
  constructor(props) {
    // content
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "content",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      String.raw`${props.content}`
    );

    // description
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "description",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(props.description)
    );

    // head
    TypeHelpers.typeCheckPrimative(
      this,
      title,
      "head",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(props.head)
    );

    // inlineStylesheet
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "inlineStylesheet",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(
        SecurityHelpers.sanitiseCSS(
          `<style>${this.props.inlineStylesheet}</style>`
        )
      )
    );

    // lang
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "lang",
      TypeHelpers.PRIMATIVES.STRING,
      "en",
      SecurityHelpers.sanitiseHTML(props.lang)
    );

    // linkedScripts
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "linkedScripts",
      TypeHelpers.PRIMATIVES.ARRAY,
      "",
      props.linkedScripts
        .map((url) => {
          return `<script src="${SecurityHelpers.sanitiseHTML(url)}"></script>`;
        })
        .join("\n")
    );

    // linkedStylesheets
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "linkedStylesheets",
      TypeHelpers.PRIMATIVES.ARRAY,
      "",
      props.linkedStylesheets
        .map((url) => {
          return `<link rel="stylesheet" href="${SecurityHelpers.sanitiseHTML(
            url
          )}" media="print" onload="this.media='all'"></link>`;
        })
        .join("\n")
    );

    // title
    TypeHelpers.typeCheckPrimative(
      this,
      title,
      "lang",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(props.title)
    );
  }
}

function DefaultTemplate(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof DEFAULT_TEMPLATE_PROPERTIES
        ? (this.props = props)
        : (this.props = new DEFAULT_TEMPLATE_PROPERTIES(props));
      return `
        <!DOCTYPE html>
        <html lang="${this.props.lang}">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="${this.props.description}" />
                <meta name="title" content="${this.props.title}" />
                <title>${this.props.title}</title>
                ${this.props.linkedStylesheets}
                ${this.props.inlineStylesheet}
                ${this.props.head}
            </head>
            <body>
              ${this.props.content}
              ${this.props.linkedScripts}
            </body>
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
