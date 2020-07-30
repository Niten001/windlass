module.exports = class Badge {
  constructor(args) {
    args === undefined || args.id === undefined
      ? (this.id = "")
      : (this.id = 'id="' + args.id + '" '); // String, Sets the id of the badge. Default: <none>
    args === undefined || args.round === undefined
      ? (this.round = "")
      : (this.round = " round"); // Boolean, Sets the style of the badge to outline. Default: <none>
    args === undefined || args.outline === undefined
      ? (this.outline = "")
      : (this.outline = " outline"); // Boolean, Sets the style of the badge to outline. Default: <none>
    args === undefined || args.caps === undefined
      ? (this.caps = "")
      : (this.caps = " caps"); // Boolean, Sets the style of the badge to caps. Default: <none>
    args === undefined || args.color === undefined
      ? (this.color = "")
      : (this.color = " " + args.color); // String, Sets the color of the badge. Default: white
    args === undefined || args.class === undefined
      ? (this.class =
          'class="badge' +
          this.round +
          this.outline +
          this.caps +
          this.color +
          '"')
      : (this.class =
          'class="' +
          args.class +
          this.round +
          this.outline +
          this.caps +
          this.color +
          '"'); // String, Sets the class of the badge. Default: "badge"
    args === undefined || args.content === undefined
      ? (this.content = "")
      : (this.content = args.content); // String, Sets the content of the badge. Default: ""
  }

  render() {
    return "<span " + this.id + this.class + ">" + this.content + "</span>";
  }
};
