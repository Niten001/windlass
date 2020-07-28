module.exports = class Alert {
    constructor(args) {
        (args === undefined || args.id === undefined) ? (this.id = "") : (this.id = "id=\"" + args.id + "\" ");   // String, Sets the id of the alert. Default: <none>
        (args === undefined || args.animated === undefined) ? (this.animated = "") : (this.animated = " animated"); // Boolean, Sets the style of the alert to animated. Default: <none>
        (args === undefined || args.square === undefined) ? (this.square = "") : (this.square = " square"); // Boolean, Sets the style of the alert to square. Default: <none>
        (args === undefined || args.round === undefined) ? (this.round = "") : (this.round = " round"); // Boolean, Sets the style of the alert to round. Default: <none>
        (args === undefined || args.outline === undefined) ? (this.outline = "") : (this.outline = " outline"); // Boolean, Sets the style of the alert to outline. Default: <none>
        (args === undefined || args.caps === undefined) ? (this.caps = "") : (this.caps = " caps"); // Boolean, Sets the style of the alert to caps. Default: <none>
        (args === undefined || args.color === undefined) ? (this.color = "") : (this.color = " " + args.color); // String, Sets the color of the alert. Default: <none>
        (args === undefined || args.class === undefined) ? (this.class = "class=\"alert" + this.animated + this.square + this.round + this.outline + this.caps + this.color + "\"") : (this.class = "class=\"" + args.class + this.animated + this.square + this.round + this.outline + this.caps + this.color + "\""); // String, Sets the class of the alert. Default: "alert"
        // TODO: Fix position to work with x/y coords as well
        (args === undefined || args.duration === undefined) ? (this.duration = "") : (this.duration = "duration=\"" + args.duration + "\" "); // Integer, Sets the duration of the alert in ms. Default: 1000
        (args === undefined || args.content === undefined) ? (this.content = "") : (this.content = args.content); // String, Sets the content of the alert. Default: ""
        (args === undefined || args.close === undefined) ? (this.close = "") : ( // Boolean, Sets the color of the alert. Default: true
            (!args.close) ? (this.close = "") : (
                this.close = "<span class=\"close\" tabindex=\"0\" onclick=\"alert.hideAlertParent(this)\" onkeydown=\"alert.keyboardHideAlertParent(this, event)\"></span>"
            )
        );
    }
    
    render() {
        return "<div role=\"alert\" " + this.id + this.class + this.duration + ">" + this.content + this.close + "</div>";
    }
};
