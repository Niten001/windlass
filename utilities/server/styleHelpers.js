// Imports
const { combineStrings } = require("./stringHelpers");

// Combine Styles function
function combineStyles(styleList, overrideStyle) {
    try {
        if (styleList.constructor === Array) {
            if (styleList.some((style) => {return (typeof style === "string" || style instanceof String);})) {
                return `style="${combineStrings(styleList)}${overrideStyle ? ` ${overrideStyle}` : ""}"`;
            } else {
                return "";
            }
        } else {
            throw new TypeError(`${styleList} on combineStyles() is not a valid Array type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    combineStyles,
};
