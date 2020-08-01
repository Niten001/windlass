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
      return html;
    } else {
      throw new TypeError(
        `${css} on sanitiseCSS() is not a valid String type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  sanitiseCSS,
  sanitiseHTML,
};
