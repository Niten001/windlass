/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Color Components
 *    Source code for all Windlass color components, including a wide range of 
 *      color constants, palettes and themes, a color validation function and 
 *      more. Use color to present your content in a friendly, pleasant and 
 *      consistent manner in accordance with the HTML5 specification and 
 *      WCAG AA standards.
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

//  Color
const INITIAL = "initial";
const INHERIT = "inherit";
const TRANSPARENT = "transparent";
const CURRENT_COLOR = "currentcolor";

//  Neutrals
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREY = {
    INITIAL:    INITIAL,
    INHERIT:    INHERIT,
    DEFAULT:    "#747374",
    WHITE:      WHITE,
    50:         "#FAFAFA",
    100:        "#DFDFDF",
    200:        "#C4C4C4",
    300:        "#AAA9AA",
    400:        "#8F8E8F",
    500:        "#747374",
    600:        "#636263",
    700:        "#525252",
    800:        "#424142",
    900:        "#202020",
    BLACK:      BLACK,
};
const COOL_GREY = {
    INITIAL:    INITIAL,
    INHERIT:    INHERIT,
    DEFAULT:    "#6D7188",
    WHITE:      WHITE,
    50:         "#F8FBFF",
    100:        "#D8DDF3",
    200:        "#BDC2D8",
    300:        "#A3A7BE",
    400:        "#888CA3",
    500:        "#6D7188",
    600:        "#5C6077",
    700:        "#4B5066",
    800:        "#3B3F56",
    900:        "#191E34",
    BLACK:      BLACK,
};
const WARM_GREY = {
    INITIAL:    INITIAL,
    INHERIT:    INHERIT,
    DEFAULT:    "#7B7160",
    WHITE:      WHITE,
    50:         "#FFFAEC",
    100:        "#E6DDCB",
    200:        "#CBC2B0",
    300:        "#B1A796",
    400:        "#968C7B",
    500:        "#7B7160",
    600:        "#6A604F",
    700:        "#59503E",
    800:        "#493F2E",
    900:        "#271E0C",
    BLACK:      BLACK,
};

// Colors
const BROWN = {
    DEFAULT:    "#583931",
    50:         "#F4DFD7",
    100:        "#DBC2BA",
    200:        "#C4A69D",
    300:        "#AD887E",
    400:        "#8C665C",
    500:        "#775147",
    600:        "#6D483F",
    700:        "#63423A",
    800:        "#4C322D",
    900:        "#331F1B",
};
const RED = {
    DEFAULT:    "#E80602",
    50:         "#FCC5C2",
    100:        "#F79D9B",
    200:        "#F2716F",
    300:        "#ED5553",
    400:        "#D82D30",
    500:        "#CE1616",
    600:        "#BC0909",
    700:        "#960404",
    800:        "#6D0202",
    900:        "#490001",
};
const CRIMSON = {
    DEFAULT:    "#D73800",
    50:         "#FFD0BF",
    100:        "#FCB69C",
    200:        "#FE9873",
    300:        "#FE7340",
    400:        "#F24F21",
    500:        "#DB3201",
    600:        "#BF2701",
    700:        "#A02101",
    800:        "#7A1901",
    900:        "#4F0B00",
};
const ORANGE = {
    DEFAULT:    "#F97611",
    50:         "#FCDFC2",
    100:        "#FCD0A6",
    200:        "#F7AD71",
    300:        "#F28B41",
    400:        "#ED7525",
    500:        "#E26009",
    600:        "#C64D01",
    700:        "#A83E01",
    800:        "#7C2B00",
    900:        "#5E2100",
};
const AMBER = {
    DEFAULT:    "#FCB30A",
    50:         "#FCF0C4",
    100:        "#FCE4A4",
    200:        "#F9D172",
    300:        "#F9C232",
    400:        "#F9B516",
    500:        "#EF9E07",
    600:        "#D38208",
    700:        "#A86201",
    800:        "#874D01",
    900:        "#633600",
};
const YELLOW = {
    DEFAULT:    "#F9DD22",
    50:         "#FCF8D1",
    100:        "#FDF4B7",
    200:        "#FCEC85",
    300:        "#FAE554",
    400:        "#F4D229",
    500:        "#EAB802",
    600:        "#D19D02",
    700:        "#B98201",
    800:        "#A06701",
    900:        "#874C00",
};
const LIME = {
    DEFAULT:    "#AEF35A",
    50:         "#F4FFD8",
    100:        "#E9FCC2",
    200:        "#DBF9A9",
    300:        "#CBF98E",
    400:        "#BAF76F",
    500:        "#A6E94D",
    600:        "#94DB36",
    700:        "#7ECC18",
    800:        "#62AA0A",
    900:        "#437C01",
};
const LIGHT_GREEN = {
    DEFAULT:    "#30E85B",
    50:         "#CEFFD8",
    100:        "#B4F7C2",
    200:        "#99EEAD",
    300:        "#7FE697",
    400:        "#64DD81",
    500:        "#4BCA6B",
    600:        "#33B855",
    700:        "#1AA53F",
    800:        "#0B842C",
    900:        "#00681D",
};
const GREEN = {
    DEFAULT:    "#01862E",
    50:         "#C0E5C3",
    100:        "#9DD2A5",
    200:        "#7ABF87",
    300:        "#57AD69",
    400:        "#349A4B",
    500:        "#11842A",
    600:        "#0D7123",
    700:        "#095C19",
    800:        "#04460E",
    900:        "#003010",
};
const TEAL = {
    DEFAULT:    "#20C997",
    50:         "#C0F5E5",
    100:        "#A2F2DA",
    200:        "#7EEACA",
    300:        "#52E3B8",
    400:        "#30DBAA",
    500:        "#25C696",
    600:        "#1CA77D",
    700:        "#128260",
    800:        "#0A684C",
    900:        "#014933",
};
const CYAN = {
    DEFAULT:    "#06E1E5",
    50:         "#CEFEFF",
    100:        "#B1F8F9",
    200:        "#97F3F4",
    300:        "#7CEBEF",
    400:        "#60E3E5",
    500:        "#46D8DB",
    600:        "#38BEC7",
    700:        "#26A0A9",
    800:        "#127F87",
    900:        "#005B66",
};
const LIGHT_BLUE = {
    DEFAULT:    "#56CCF2",
    50:         "#CEF6FF",
    100:        "#B1EBF9",
    200:        "#97E0F4",
    300:        "#7CD4EF",
    400:        "#64CBEA",
    500:        "#4BBFE5",
    600:        "#34A7D1",
    700:        "#2391BA",
    800:        "#0E78A5",
    900:        "#016391",
};
const BLUE = {
    DEFAULT:    "#1A70E1",
    50:         "#C0DCF7",
    100:        "#A2C6EF",
    200:        "#85B1E8",
    300:        "#679BE0",
    400:        "#4D87DF",
    500:        "#2970CE",
    600:        "#1F5EB6",
    700:        "#164D9E",
    800:        "#0C3B85",
    900:        "#02296D",
};
const INDIGO = {
    DEFAULT:    "#1D3BB7",
    50:         "#C7D6FC",
    100:        "#ADC0F4",
    200:        "#97ADED",
    300:        "#6E8AE5",
    400:        "#415ED3",
    500:        "#2848BA",
    600:        "#1D3CAD",
    700:        "#152F99",
    800:        "#091F7C",
    900:        "#010E47",
};
const PURPLE = {
    DEFAULT:    "#6512E1",
    50:         "#DDC2FC",
    100:        "#C8A7F2",
    200:        "#B58CEA",
    300:        "#9F6DE7",
    400:        "#7A3ED6",
    500:        "#6621CE",
    600:        "#5616BC",
    700:        "#3F1396",
    800:        "#2F097A",
    900:        "#19004F",
};
const PINK = {
    DEFAULT:    "#DA0299",
    50:         "#FCBDED",
    100:        "#F29FDD",
    200:        "#EA85CF",
    300:        "#E261C0",
    400:        "#E048BE",
    500:        "#CE21A0",
    600:        "#BA0982",
    700:        "#A30D73",
    800:        "#87055E",
    900:        "#630040",
};

let NEUTRALS = GREY;

const COLORS = {
    INITIAL:        INITIAL,
    INHERIT:        INHERIT,
    TRANSPARENT:    TRANSPARENT,
    CURRENT_COLOR:  CURRENT_COLOR,
    WHITE:          WHITE,
    BLACK:          BLACK,
    BROWN:          BROWN,
    RED:            RED,
    CRIMSON:        CRIMSON,
    ORANGE:         ORANGE,
    AMBER:          AMBER,
    YELLOW:         YELLOW,
    LIME:           LIME,
    LIGHT_GREEN:    LIGHT_GREEN,
    GREEN:          GREEN,
    TEAL:           TEAL,
    CYAN:           CYAN,
    LIGHT_BLUE:     LIGHT_BLUE,
    BLUE:           BLUE,
    INDIGO:         INDIGO,
    PURPLE:         PURPLE,
    PINK:           PINK,
};

const THEME_COLORS = {
    INITIAL:    INITIAL,
    INHERIT:    INHERIT,
    PRIMARY:    BLUE.DEFAULT,
    SECONDARY:  LIGHT_BLUE.DEFAULT,
    SUCCESS:    GREEN[400],
    INFO:       PURPLE[400],
    WARNING:    AMBER[400],
    DANGER:     RED[400],
    LIGHT:      NEUTRALS[50],
    DARK:       NEUTRALS[900],
};

function isValidColor(color) {
    return (
        Object.values(COLORS).includes(color) ||
        Object.values(NEUTRALS).includes(color) ||
        Object.values(THEME_COLORS).includes(color) ||
        Object.values(BROWN).includes(color) ||
        Object.values(RED).includes(color) ||
        Object.values(CRIMSON).includes(color) ||
        Object.values(ORANGE).includes(color) ||
        Object.values(AMBER).includes(color) ||
        Object.values(YELLOW).includes(color) ||
        Object.values(LIME).includes(color) ||
        Object.values(LIGHT_GREEN).includes(color) ||
        Object.values(GREEN).includes(color) ||
        Object.values(TEAL).includes(color) ||
        Object.values(CYAN).includes(color) ||
        Object.values(LIGHT_BLUE).includes(color) ||
        Object.values(BLUE).includes(color) ||
        Object.values(INDIGO).includes(color) ||
        Object.values(PURPLE).includes(color) ||
        Object.values(PINK).includes(color) ||
        Object.values(GREY).includes(color) ||
        Object.values(COOL_GREY).includes(color) ||
        Object.values(WARM_GREY).includes(color) ||
        ((
            (typeof color === "string") ||
            (color instanceof String)
        ) && (
            color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
        ))
    );
}

module.exports = { NEUTRALS, COLORS, THEME_COLORS, isValidColor };
