function Video(thumbnail, videoUrl) {
  return `<video id="video" ${videoUrl} poster="${thumbnail}" controls></video>`;
}

module.exports = function Media(metadata) {
  const thumbnail = metadata.thumbnails[metadata.thumbnails.length - 1].url;
  const videoUrl =
    metadata.formats == null
      ? ""
      : `src="${metadata.formats[metadata.formats.length - 1].url}"`;

  return `<div class="media">
    <div class="media_controls"></div>
    ${Video(thumbnail, videoUrl)}
  </div>`;
};
