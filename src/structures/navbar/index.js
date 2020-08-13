const Button = require("../../components").Inputs.Button;
const { Container } = require("../../components").Layout;
const { Link } = require("../../components").Typography;
const Search = require("../search");

module.exports = function Navbar(loggedIn) {
  return Container({
    class: "nav-bar",
    content: [
      Container({
        class: "logo-container",
        content: `<img class="logo" alt="ValueTube Logo" src="./frontend/img/ValueTube_Logo.png" onclick="window.location.href = './'"></img>`,
      }),
      Container({
        id: "about",
        class: "nav-link",
        content: Link({
          link: "./about",
          tabIndex: 0,
          content: "About",
        }),
      }),
      Search(),
      loggedIn
        ? `<div class="profile_icon">
          <img src="./frontend/img/team/default_profile.jpg" />
        </div>`
        : `<div class="signin-container">
          ${Button({
            class: "primary",
            outline: true,
            caps: true,
            actionDown: `window.location.href='./signin'`,
            content: "Sign in",
          })}
          ${Button({
            class: "primary",
            caps: true,
            actionDown: `window.location.href='./signup'`,
            content: "Sign up",
          })}
        </div>`,
    ].join("\n"),
  });
};
