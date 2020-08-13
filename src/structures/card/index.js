module.exports = function Card(metadata) {
  let duration = "";
  const hours = Math.floor(metadata.duration / 3600);
  let minutes = Math.floor((metadata.duration - hours * 3600) / 60);
  let seconds = metadata.duration - hours * 3600 - minutes * 60;

  minutes = minutes < 10 && hours != 0 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  duration =
    hours != 0
      ? hours + ":" + minutes + ":" + seconds
      : minutes + ":" + seconds;

  let views = "";
  if (metadata.view_count < 1000) {
    views = metadata.view_count;
  } else if (metadata.view_count < 1000000) {
    views = (metadata.view_count / 1000).toFixed(1) + "K";
  } else if (metadata.view_count < 1000000000) {
    views = (metadata.view_count / 1000000).toFixed(1) + "M";
  } else if (metadata.view_count < 1000000000000) {
    views = (metadata.view_count / 1000000000).toFixed(1) + "B";
  } else {
    views = (metadata.view_count / 1000000000000).toFixed(1) + "T";
  }

  let timeSinceUpload = "";
  const date = new Date();
  const timeSince = [
    date.getUTCFullYear() - metadata.upload_date.substring(0, 4),
    date.getUTCMonth() - metadata.upload_date.substring(4, 6),
    date.getUTCDay() - metadata.upload_date.substring(6, 8),
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
      <div class="card" onclick="window.location.href = './watch?v=${metadata.id}'">
          <div class="preview">
              <img alt="${metadata.title} thumbnail" src="${metadata.thumbnail}" loading="lazy" decoding="async" />
              <div class="duration">${duration}</div>
          </div>
          <div class="details">
              <div class="title">${metadata.title}</div>
              <div class="content-creator youtube-link" data-url="${metadata.uploader_url}">${metadata.uploader}</div>
              <div class="views">${views} views</div>
              <div class="published">${timeSinceUpload}</div>
          </div>
      </div>
  `;
};
