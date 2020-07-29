const randomId = require("../../../utilities/server/server.js").RandomHelpers.randomId;

module.exports = class Checkbox {
    constructor(args) {
        (args === undefined || args.id === undefined) ? (this.id = "") : (this.id = "id=\"" + args.id + "\" "); // String, Sets the id of the checkbox. Default: <none>
        //(args === undefined || args.animated === undefined) ? (this.animated = ``) : (this.animated = ` animated`); // Boolean, Sets the style of the checkbox to animated. Default: <none>
        (args === undefined || args.outline === undefined) ? (this.outline = "") : (this.outline = " outline"); // Boolean, Sets the style of the checkbox to outline. Default: <none>
        (args === undefined || args.color === undefined) ? (this.color = "") : (this.color = " " + args.color);    // String, Sets the color of the checkbox. Default: inherit
        (args === undefined || args.class === undefined) ? (this.class = "class=\"checkbox" + this.outline + this.color + "\"") : (this.class = "class=\"" + args.class + this.outline + this.color + "\""); // String, Sets the class of the checkbox. Default: "checkbox"
        (args === undefined || args.action === undefined) ? (this.action = "") : (this.action = "onclick=\"(this.hasAttribute(disabled)) ? ('') : (" + args.action + ")\""); // String, Sets the onclick behaviour of the button. Default: <none>
        (args === undefined || args.label === undefined) ? (this.label = false) : (this.label = args.label); // String, Sets the label of the checkbox. Default: <none>
    }
    
    render() {
        const checkboxId = randomId("ch_", 5);
        return (this.label) ? (
            "<checkbox " + this.id + this.class + `>
                <input id="` + checkboxId + "\" type=\"checkbox\" " + this.action + `/>
                <label for="` + checkboxId + "\">" + this.label + `</label>
            </checkbox>`
        ) : (
            "<checkbox " + this.id + this.class + `>
                <input type="checkbox" ` + this.action + `/>
            </checkbox>`
        );
    }
};