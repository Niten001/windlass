const Search = require("../search/search");
const Button = require("../../components/input/button/button");

module.exports = class NavBar {
  constructor() {}

  render(loggedIn) {
    const search = new Search();
    const signInButton = new Button(
      "Sign in",
      "outline caps",
      "primary",
      "./signin"
    );
    const signUpButton = new Button("Sign up", "caps", "primary", "./signup");

    let profileHTML = "";
    if (loggedIn) {
      profileHTML = `
            <div class="profile_icon">
                <img src="./frontend/img/team/default_profile.jpg" />
            </div>
        `;
    } else {
      profileHTML =
        `
                <div class="signin-container">
                ` +
        signInButton.render() +
        signUpButton.render() +
        `
                </div>
            `;
    }

    return (
      `
            <div class="nav-bar">
                <div class="logo-container">
                    <img class="logo" src="./frontend/img/ValueTube_Logo.png" onclick="window.location.href = './'"></img>
                </div>
                <div id="about" class="nav-link" onclick="window.location.href = './about'">About</div>
                ` +
      search.render() +
      `
                ` +
      profileHTML +
      `
            </div>
        `
    );
  }
};
