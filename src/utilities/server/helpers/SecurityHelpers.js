// Sanitise CSS
function sanitiseCSS(css) {
  try {
    if (css === undefined) {
      return "";
    } else if (typeof css === "string" || css instanceof String) {
      return css;
    } else {
      throw new TypeError(
        `${css} on sanitiseCSS() is not a valid String type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// Sanitise HTML
function sanitiseHTML(html) {
  try {
    if (html === undefined) {
      return "";
    } else if (typeof html === "string" || html instanceof String) {
      return [...html]
        .map((char) => {
          return char === encodeURI(char) ? char : `&#${char.charCodeAt(0)};`;
        })
        .join("");
    } else {
      throw new TypeError(
        `${html} on sanitiseHTML() is not a valid String type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// Sanitise JS
function sanitiseJS(js) {
  try {
    if (js === undefined) {
      return "";
    } else if (typeof js === "string" || js instanceof String) {
      return js;
    } else {
      throw new TypeError(`${css} on sanitiseJS() is not a valid String type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  sanitiseCSS,
  sanitiseHTML,
  sanitiseJS,
};
