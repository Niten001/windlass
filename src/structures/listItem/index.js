const Container = require("../../components").Layout.Container;
const TypeHelpers = require("../../utilities").Server.TypeHelpers;

class LIST_ITEM_PROPERTIES {
  constructor(props) {
    // metadata
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "metadata",
      TypeHelpers.PRIMATIVES.OBJECT,
      undefined,
      props.metadata
    );

    // small
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "small",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.small
    );
  }
}

module.exports = function ListItem(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof LIST_ITEM_PROPERTIES
        ? (this.props = props)
        : (this.props = new LIST_ITEM_PROPERTIES(props));

      const hours = Math.floor(this.props.metadata.duration / 3600);
      let minutes = Math.floor(
        (this.props.metadata.duration - hours * 3600) / 60
      );
      let seconds = this.props.metadata.duration - hours * 3600 - minutes * 60;
      minutes = minutes < 10 && hours != 0 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      let views = "";
      if (this.props.metadata.view_count < 1000) {
        views = this.props.metadata.view_count;
      } else if (this.props.metadata.view_count < 1000000) {
        views = (this.props.metadata.view_count / 1000).toFixed(1) + "K";
      } else if (this.props.metadata.view_count < 1000000000) {
        views = (this.props.metadata.view_count / 1000000).toFixed(1) + "M";
      } else if (this.props.metadata.view_count < 1000000000000) {
        views = (this.props.metadata.view_count / 1000000000).toFixed(1) + "B";
      } else {
        views =
          (this.props.metadata.view_count / 1000000000000).toFixed(1) + "T";
      }

      let timeSinceUpload = "";
      const date = new Date();
      const timeSince = [
        date.getUTCFullYear() - this.props.metadata.upload_date.substring(0, 4),
        date.getUTCMonth() - this.props.metadata.upload_date.substring(4, 6),
        date.getUTCDay() - this.props.metadata.upload_date.substring(6, 8),
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

      return `
                <div class="list-item${
                  this.props.small ? " sm" : ""
                }" onclick="window.location.href = './watch?v=${
        this.props.metadata.id
      }'">
                    <div class="preview">
                        <img alt="${this.props.metadata.title}" src="${
        this.props.metadata.thumbnail
      }" loading="lazy" decoding="async" />
                        <div class="duration">${
                          hours != 0
                            ? `${hours}:${minutes}:${seconds}`
                            : `${minutes}:${seconds}`
                        }</div>
                    </div>
                    <div class="details">
                        <div class="title">${
                          this.props.small &&
                          this.props.metadata.title.length > 58
                            ? `${this.props.metadata.title
                                .substring(0, 58)
                                .substring(
                                  0,
                                  this.props.metadata.title.lastIndexOf(" ")
                                )} ...`
                            : this.props.metadata.title
                        }</div>
                        <div class="content-creator youtube-link" data-url="${
                          this.props.metadata.uploader_url
                        }">${this.props.metadata.uploader}</div>
                        <div class="views">${views} views</div>
                        <div class="published">${timeSinceUpload}</div>
                        ${Container({
                          class: "description",
                          content: this.props.small
                            ? ``
                            : this.props.metadata.description.length > 270
                            ? `${this.props.metadata.description
                                .substring(0, 270)
                                .substring(
                                  0,
                                  this.props.metadata.description.lastIndexOf(
                                    " "
                                  )
                                )} ...`
                            : this.props.metadata.description,
                        })}
                    </div>
                </div>
            `;
    } else {
      throw new TypeError(`${props} on ListItem is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
};
