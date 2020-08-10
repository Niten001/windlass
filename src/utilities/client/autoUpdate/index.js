module.exports = autoUpdate = (url, section = document.body) => {
  var client = new WebSocket(url);
  client.onmessage = function (e) {
    if (typeof e.data === "string") {
      section.innerHTML = e.data;
    }
  };
};
