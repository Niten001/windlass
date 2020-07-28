class Video {
    constructor(thumbnail, videoData) {
        this.thumbnail = thumbnail;
        this.v_url = videoData.url;
    }
    
    render() {
        return `
            <video id="video" src="` + this.v_url + `" poster="` + this.thumbnail + `" width="100%"></video>
        `;
    }
}

class Audio {
    constructor(audioData) {
        this.a_url = audioData.url;
    }
    
    render() {
        return `
            <audio id="audio" src="` + this.a_url + `"></audio>
        `;
    }
}

module.exports = class Media {
    constructor(metadata) {
        this.title = metadata.fulltitle;
        this.thumbnail = metadata.thumbnail;
        this.video = new Video(this.thumbnail, metadata.requested_formats[0]);
        this.audio = new Audio(metadata.requested_formats[1]);
    }
    
    render() {
        return `
            <div class="media">
                <div class="media_controls"></div>
                ` + this.video.render()
                  + this.audio.render() + `
            </div>
        `;
    }
}