/* ------------------------------------------------------------------------------------
    Types of textboxes:
    - Plain 1 line textbox
    - Plain multiline textbox
    - Textbox with buttons/options (eg. Search)
    - Google style focus input textbox
    - Stylised input multiline textbox
    - Auto-predict text box
    - Dropdown box
   ------------------------------------------------------------------------------------ */

module.exports = class Textbox {
    constructor(args) {
        (args === undefined || args.id === undefined) ? (this.id = ``) : (this.id = `id="` + args.id + `" `);   // String, Sets the id of the textbox. Default: <none>
        // (args === undefined || args.animated === undefined) ? (this.animated = ``) : (this.animated = ` animated`); // Boolean, Sets the style of the textbox to animated. Default: <none>
        (args === undefined || args.round === undefined) ? (this.round = ``) : (this.round = ` round`); // Boolean, Sets the style of the textbox to round. Default: <none>
        (args === undefined || args.outline === undefined) ? (this.outline = ``) : (this.outline = ` outline`); // Boolean, Sets the style of the textbox to outline. Default: <none>
        (args === undefined || args.caps === undefined) ? (this.caps = ``) : (this.caps = ` caps`); // Boolean, Sets the style of the textbox to caps. Default: <none>
        (args === undefined || args.color === undefined) ? (this.color = ``) : (this.color = ` ` + args.color); // String, Sets the color of the textbox. Default: <none>
        (args === undefined || args.class === undefined) ? (this.class = `class="textbox` + this.animated + this.round + this.outline + this.caps + this.color + `"`) : (this.class = `class="` + args.class + this.animated + this.round + this.outline + this.caps + this.color + `"`); // String, Sets the class of the textbox. Default: "textbox"
        
        (args === undefined || args.name === undefined) ? (this.name = ``) : (this.name = `name="` + args.name + `" `);
        (args === undefined || args.pattern === undefined) ? (this.pattern = ``) : (this.pattern = `pattern="` + args.pattern + `" `);
        (args === undefined || args.placeholder === undefined) ? (this.placeholder = ``) : (this.placeholder = `placeholder="` + args.placeholder + `" `);
        (args === undefined || args.minlength === undefined) ? (this.minlength = ``) : (this.minlength = `minlength="` + args.minlength + `" `);
        (args === undefined || args.maxlength === undefined) ? (this.maxlength = ``) : (this.maxlength = `maxlength="` + args.maxlength + `" `);
        (args === undefined || args.size === undefined) ? (this.size = ``) : (this.size = `size="` + args.size + `" `);
        (args === undefined || args.value === undefined) ? (this.value = ``) : (this.value = `value="` + args.value + `" `);
        (args === undefined || args.required === undefined) ? (this.required = ``) : ((args.required) ? (this.required = `required `) : (this.required = ``));
    }
    
    render() { // Do this better
        return `
            <div class="textbox-container">
                <input type="text" ` + this.id + this.class + 
                                    this.name + this.pattern + 
                                    this.placeholder + this.minlength + 
                                    this.maxlength + this.size +
                                    this.value + this.required + 
                `/>
            </div>
        `;
    }
}