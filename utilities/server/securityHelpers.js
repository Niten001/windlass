// Sanitise CSS
function sanitiseCSS(css) {
    try {
        if ((typeof props.link === "string") || (props.link instanceof String)) {
            return css;
        }  else {
            throw new TypeError(`${css} on sanitiseCSS() is not a valid String type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Sanitise HTML
function sanitiseHTML(html) {
    try {
        if ((typeof props.link === "string") || (props.link instanceof String)) {
            return html;
        }  else {
            throw new TypeError(`${css} on sanitiseCSS() is not a valid String type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    sanitiseCSS,
    sanitiseHTML,
};
