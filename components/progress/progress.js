module.exports = class Progress {
    constructor(args) {
        (args === undefined || args.id === undefined) ? (this.id = ``) : (this.id = `id="` + args.id + `" `); // String, Sets the id of the progress. Default: <none>
        (args === undefined || args.animated === undefined) ? (this.animated = ``) : (this.animated = ` animated`); // Boolean, Sets the style of the progress to animated. Default: <none>
        (args === undefined || args.round === undefined) ? (this.round = ``) : (this.round = ` round`); // Boolean, Sets the style of the button to round. Default: <none>
        (args === undefined || args.outline === undefined) ? (this.outline = ``) : (this.outline = ` outline`); // Boolean, Sets the style of the progress to outline. Default: <none>
        (args === undefined || args.color === undefined) ? (this.color = ``) : (this.color = ` ` + args.color); // String, Sets the color of the progress. Default: inherit
        (args === undefined || args.class === undefined) ? (this.class = `class="progress` + this.outline + this.color + `"`) : (this.class = `class="` + args.class + this.outline + this.color + `"`); // String, Sets the class of the progress. Default: "progress"
        (args === undefined || args.progress === undefined) ? (this.progress = ``) : (this.progress = `progress="` + args.progress + `" `); // Integer, Sets the label of the progress. Default: <none>
        (args === undefined || args.label === undefined) ? (this.label = false) : (this.label = args.label); // String, Sets the label of the progress. Default: <none>
    }
    
    render() {
        return (this.label) ? (
            `<progress ` + this.id + this.class + this.progress + `></progress>`
        ) : (
            `<progress ` + this.id + this.class + this.progress + `></progress>`
        );
    }
}

module.exports.displayProgress = function displayProgress(progress) {
    
}
