const randomId = require("../../../utilities/server/server.js").RandomHelpers
  .randomId;

module.exports = class Button {
  constructor(args) {
    args === undefined || args.id === undefined
      ? (this.id = "")
      : (this.id = 'id="' + args.id + '" '); // String, Sets the id of the button. Default: <none>
    args === undefined || args.animated === undefined
      ? (this.animated = "")
      : (this.animated = " animated"); // Boolean, Sets the style of the button to animated. Default: <none>
    args === undefined || args.round === undefined
      ? (this.round = "")
      : (this.round = " round"); // Boolean, Sets the style of the button to round. Default: <none>
    args === undefined || args.outline === undefined
      ? (this.outline = "")
      : (this.outline = " outline"); // Boolean, Sets the style of the button to outline. Default: <none>
    args === undefined || args.caps === undefined
      ? (this.caps = "")
      : (this.caps = " caps"); // Boolean, Sets the style of the button to caps. Default: <none>
    args === undefined || args.color === undefined
      ? (this.color = "")
      : (this.color = " " + args.color); // String, Sets the color of the button. Default: <none>
    args === undefined || args.class === undefined
      ? (this.class =
          'class="button' +
          this.animated +
          this.round +
          this.outline +
          this.caps +
          this.color +
          '"')
      : (this.class =
          'class="' +
          args.class +
          this.animated +
          this.round +
          this.outline +
          this.caps +
          this.color +
          '"'); // String, Sets the class of the button. Default: "button"
    args === undefined || args.actionDown === undefined
      ? (this.actionDown = "")
      : (this.actionDown = args.actionDown); // String, Sets the onclick behaviour of the button. Default: <none>
    args === undefined || args.actionUp === undefined
      ? (this.actionUp = "")
      : (this.actionUp = args.actionUp); // String, Sets the onclick behaviour of the button. Default: <none>
    args === undefined || args.content === undefined
      ? (this.content = "")
      : (this.content = args.content); // String, Sets the content of the button. Default: ""
    args === undefined || args.toggle === undefined
      ? (this.toggle = false)
      : (this.toggle = args.toggle);
  }

  render() {
    const checkboxId = randomId("ch_", 5);
    return this.toggle
      ? '<button role="button" ' +
          this.id +
          this.class +
          ' onclick="button.toggleButton(this, () => {' +
          this.actionDown +
          "}, () => {" +
          this.actionUp +
          `})">
                <input id="` +
          checkboxId +
          `" type="checkbox">
                <label for="` +
          checkboxId +
          '">' +
          this.content +
          `</label>
            </button>`
      : '<button role="button" ' +
          this.id +
          this.class +
          ' onclick="' +
          this.actionDown +
          '">' +
          this.content +
          "</button>";
  }
};
