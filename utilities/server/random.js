function randomId(prestring, length) {
    var output = "";
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = 62;
        for (var i = 0; i < length; i++) {
            output += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return prestring + output;
}

module.exports = {
    randomId
};