module.exports = class ButtonGroup {
  constructor(parent) {
    this.parent = parent;
    this.buttons = [
      { text: "Button 1", color: "" },
      { text: "Button 2", color: "" },
      { text: "Button 3", color: "" },
    ];
  }

  render() {
    let btnGrpHTML = '<div class="btn-grp">';
    btnGrpHTML +=
      '<div class="btn end ' +
      this.buttons[0].color +
      '">' +
      this.buttons[0].text +
      "</div>";
    for (let i = 1; i < this.buttons.length - 1; i++) {
      btnGrpHTML +=
        '<div class="btn ' +
        this.buttons[i].color +
        '">' +
        this.buttons[i].text +
        "</div>";
    }
    btnGrpHTML +=
      '<div class="btn end ' +
      this.buttons[this.buttons.length - 1].color +
      '">' +
      this.buttons[this.buttons.length - 1].text +
      "</div>";
    btnGrpHTML += "</div>";

    return btnGrpHTML;
  }
};
