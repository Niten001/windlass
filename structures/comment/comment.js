module.exports = class Comment {
    constructor(metadata) {
        this.metadata = metadata;
    }
    
    render() {
        return `
            <div class="comment">
                <div class="user">
                    ` + this.metadata.user + `
                </div>
                <div class="comment-body">
                    ` + this.metadata.commentBody + `
                </div>
            </div>
        `;
    }
};