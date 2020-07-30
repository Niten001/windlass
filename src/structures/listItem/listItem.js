module.exports = class ListItem {
  constructor(metadata, style) {
    this.metadata = metadata;
    this.style = style;
  }

  render() {
    let title = this.metadata.title;
    if (this.style == "sm" && title.length > 58) {
      title = title.substr(0, 58);
      title = title.substr(0, title.lastIndexOf(" ")) + " ...";
    }

    let duration = "";
    const hours = Math.floor(this.metadata.duration / 3600);
    let minutes = Math.floor((this.metadata.duration - hours * 3600) / 60);
    let seconds = this.metadata.duration - hours * 3600 - minutes * 60;
    minutes = minutes < 10 && hours != 0 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    duration =
      hours != 0
        ? hours + ":" + minutes + ":" + seconds
        : minutes + ":" + seconds;

    let views = "";
    if (this.metadata.view_count < 1000) {
      views = this.metadata.view_count;
    } else if (this.metadata.view_count < 1000000) {
      views = (this.metadata.view_count / 1000).toFixed(1) + "K";
    } else if (this.metadata.view_count < 1000000000) {
      views = (this.metadata.view_count / 1000000).toFixed(1) + "M";
    } else if (this.metadata.view_count < 1000000000000) {
      views = (this.metadata.view_count / 1000000000).toFixed(1) + "B";
    } else {
      views = (this.metadata.view_count / 1000000000000).toFixed(1) + "T";
    }

    let timeSinceUpload = "";
    const date = new Date();
    const timeSince = [
      date.getUTCFullYear() - this.metadata.upload_date.substr(0, 4),
      date.getUTCMonth() - this.metadata.upload_date.substr(4, 2),
      date.getUTCDay() - this.metadata.upload_date.substr(6, 2),
    ];
    if (timeSince[0] > 1) {
      timeSinceUpload = timeSince[0] + " years ago";
    } else if (timeSince[0] > 0) {
      timeSinceUpload = "1 year ago";
    } else if (timeSince[1] > 1) {
      timeSinceUpload = timeSince[1] + " months ago";
    } else if (timeSince[1] > 0) {
      timeSinceUpload = "1 month ago";
    } else if (timeSince[2] > 1) {
      timeSinceUpload = timeSince[2] + " days ago";
    } else if (timeSince[2] > 0) {
      timeSinceUpload = "1 day ago";
    } else {
      timeSinceUpload = "less than 1 day ago";
    }

    let descriptionHTML = "";
    if (this.style != "sm") {
      descriptionHTML = this.metadata.description;
      if (descriptionHTML.length > 270) {
        descriptionHTML = descriptionHTML.substr(0, 270);
        descriptionHTML =
          descriptionHTML.substr(0, descriptionHTML.lastIndexOf(" ")) + " ...";
      }
      descriptionHTML =
        '<div class="description">' + descriptionHTML + "</div>";
    }

    return (
      `
            <div class="list-item ` +
      this.style +
      '" onclick="window.location.href = \'./watch?v=' +
      this.metadata.id +
      `'">
                <div class="preview">
                    <img src="` +
      this.metadata.thumbnail +
      `"/>
                    <div class="duration">` +
      duration +
      `</div>
                </div>
                <div class="details">
                    <div class="title">` +
      title +
      `</div>
                    <div class="content-creator youtube-link" data-url="` +
      this.metadata.uploader_url +
      '">' +
      this.metadata.uploader +
      `</div>
                    <div class="views">` +
      views +
      " views" +
      `</div>
                    <div class="published">` +
      timeSinceUpload +
      `</div>
                    ` +
      descriptionHTML +
      `
                </div>
            </div>
        `
    );
  }
};
