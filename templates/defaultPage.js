module.exports = function defaultPage(props) {
    (props === undefined || props.title === undefined) ? (this.title = ``) : (this.title = props.title);
    (props === undefined || props.description === undefined) ? (this.description = ``) : (this.description = props.description);
    (props === undefined || props.lang === undefined) ? (this.lang = `en`) : (this.lang = props.lang);
    (props === undefined || props.content === undefined) ? (this.content = ``) : (this.content = String.raw`${props.content}`);

    return `
        <!DOCTYPE html>
        <html lang="${this.lang}">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="${this.description}" />
                <meta name="title" content="${this.title}" />
                <title>` + this.title + `</title>
            </head>
            <body>${this.content}</body>
        </html>
    `;
}