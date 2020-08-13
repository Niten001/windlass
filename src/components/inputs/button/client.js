function parseButtonPress(self, action) {
  if (!self.hasAttribute("disabled")) {
    action();
  }
}

function toggleButton(self, actionDown, actionUp) {
  if (!self.hasAttribute("disabled")) {
    if (self.hasAttribute("checked")) {
      self.removeAttribute("checked");
      self.firstElementChild.checked = false;
      actionUp();
    } else {
      self.setAttribute("checked", "");
      self.firstElementChild.checked = true;
      actionDown();
    }
  }
}
