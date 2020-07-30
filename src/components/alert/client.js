function hideAlertParent(self) {
  self.parentElement.hidden = true;
}

function keyboardHideAlertParent(self, event) {
  const code = event.charCode || event.keyCode;
  if (code == 32 || code == 13) {
    event.preventDefault();
    hideAlertParent(self);
  }
}
