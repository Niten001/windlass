const DEFAULT_PROPERTIES = require("../../components").Default
  .DEFAULT_PROPERTIES;
const Container = require("../../components").Layout.Container;
const TypeHelpers = require("../../utilities").Server.TypeHelpers;

class BUTTONGROUP_PROPERTIES extends DEFAULT_PROPERTIES {
  constructor(props) {
    super(props);
    // buttons
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "buttons",
      TypeHelpers.PRIMATIVES.ARRAY,
      [],
      props.buttons
    );
  }
}

function ButtonGroup(props) {
  try {
    props === undefined ? (props = {}) : null;
    if (typeof props === "object" || props instanceof Object) {
      props instanceof BUTTONGROUP_PROPERTIES
        ? (this.props = props)
        : (this.props = new BUTTONGROUP_PROPERTIES(props));
      return Container({
        class: "btn-grp",
        content: this.props.buttons.map((button, i) => {
          return Container({
            class: [
              "btn",
              i == 0 || i == this.props.buttons.length - 1 ? "end" : null,
              button.color,
            ].join(" "),
            content: button.text,
          });
        }),
      });
    } else {
      throw new TypeError(
        `${props} on ButtonGroup is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  BUTTONGROUP_PROPERTIES,
  ButtonGroup,
};
