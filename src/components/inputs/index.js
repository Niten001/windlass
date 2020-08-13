// Imports
const DEFAULT_PROPERTIES = require("../default").DEFAULT_PROPERTIES;
const {
  RandomHelpers,
  SecurityHelpers,
  StringHelpers,
  StyleHelpers,
  TypeHelpers,
} = require("../../utilities").Server;
const Checkbox = require("./checkbox/checkbox.js");
const Textbox = require("./textbox/textbox.js");

// Button Properties
class BUTTON_PROPERTIES extends DEFAULT_PROPERTIES {
  constructor(props) {
    super(props);
    // actionUp
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "actionUp",
      TypeHelpers.PRIMATIVES.STRING,
      false,
      SecurityHelpers.sanitiseJS(props.actionUp)
    );

    // actionDown
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "actionDown",
      TypeHelpers.PRIMATIVES.STRING,
      false,
      SecurityHelpers.sanitiseJS(props.actionDown)
    );

    // animated
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "animated",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.animated ? "animated" : null
    );

    // caps
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "caps",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.caps ? "caps" : null
    );

    // outline
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "outline",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.outline ? "outline" : null
    );

    // round
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "round",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.round ? "round" : null
    );

    // class
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "class",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      `class="${SecurityHelpers.sanitiseHTML(
        StringHelpers.combineStrings([
          props.class,
          this.animated,
          this.round,
          this.outline,
          this.caps,
          this.color,
        ])
      )}"`
    );
  }
}

// Button
function Button(props) {
  try {
    props === undefined ? (props = {}) : null;
    if (typeof props === "object" || props instanceof Object) {
      props instanceof BUTTON_PROPERTIES
        ? (this.props = props)
        : (this.props = new BUTTON_PROPERTIES(props));
      return `<button role="button" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.tabIndex,
        this.props.actionDown ? `onclick=\"${this.props.actionDown}\"` : "",
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</button>`;
    } else {
      throw new TypeError(`${props} on Button is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// Toggle Button
function ToggleButton(props) {
  try {
    props === undefined ? (props = {}) : null;
    if (typeof props === "object" || props instanceof Object) {
      props instanceof BUTTON_PROPERTIES
        ? (this.props = props)
        : (this.props = new BUTTON_PROPERTIES(props));
      const checkboxId = RandomHelpers.randomId("ch_", 5);
      return `<button role="button" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.tabIndex,
        this.props.actionUp || this.props.actionDown
          ? `onclick="button.toggleButton(this, () => {${this.props.actionDown}}, () => {${this.props.actionUp}})"`
          : "",
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>
        <input id="${checkboxId}" type="checkbox">
        <label for="${checkboxId}">${this.props.content}</label>
      </button>`;
    } else {
      throw new TypeError(`${props} on Button is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  BUTTON_PROPERTIES,
  Button,
  ToggleButton,
  Checkbox,
  Textbox,
};
