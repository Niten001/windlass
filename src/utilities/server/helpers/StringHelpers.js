// Combine Strings function
function combineStrings(stringArray) {
  try {
    if (stringArray.constructor === Array) {
      if (
        stringArray.some((string) => {
          return typeof string === "string" || string instanceof String;
        })
      ) {
        return stringArray
          .filter((string) => {
            return string != null && string != "";
          })
          .join(" ");
      } else {
        return "";
      }
    } else {
      throw new TypeError(
        `${stringArray} on combineStrings() is not a valid Array type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  combineStrings,
};
