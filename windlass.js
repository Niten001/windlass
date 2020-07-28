// Components
const Alert = require("./components/alert/alert");
const Badge = require("./components/badge/badge");
const Color = require("./components/color/color");
const Default = require("./components/default/default");
const Input = require("./components/input/input");
const Layout = require("./components/layout/layout");
// const Media = require("./components/media/media");
// const Nav = require("./components/nav/nav");
const Progress = require("./components/progress/progress");
// const Spinner = require("./components/spinner/spinner");
// const Toast = require("./components/toast/toast");
// const Tooltip = require("./components/tooltip/tooltip");
const Typography = require("./components/typography/typography");

const Components = {
    Alert,
    Badge,
    Color,
    Default,
    Input,
    Layout,
    // Media,
    // Nav,
    Progress,
    // Spinner,
    // Toast,
    // Tooltip,
    Typography,
};

// Extensions
// const Collapse = require("./extensions/collapse/collapse");
// const Parallax = require("./extensions/parallax/parallax");

const Extensions = {
    // Collapse,
    // Parallax,
};

// Structures
// const ButtonGroup = require("./structures/buttonGroup/buttonGroup");
// const Card = require("./structures/card/card");
// const Carousel = require("./structures/carousel/carousel");
// const Comment = require("./structures/comment/comment");
// const Form = require("./structures/form/form");
// const ListItem = require("./structures/listItem/listItem");
// const MediaPlayer = require("./structures/mediaPlayer/mediaPlayer");
// const Modal = require("./structures/modal/modal");
// const Navbar = require("./structures/navbar/navbar");
// const Pagination = require("./structures/pagination/pagination");
// const Search = require("./structures/search/search");

const Structures = {
    // ButtonGroup,
    // Card,
    // Carousel,
    // Comment,
    // Form,
    // ListItem,
    // MediaPlayer,
    // Modal,
    // Navbar,
    // Pagination,
    // Search,
};

// Templates
const DefaultPage = require("./templates/defaultPage");

const Templates = {
    DefaultPage,
};

// Utilities
//const Client = require("./utilities/client/client");
//const Server = require("./utilities/server/server");

const Utilities = {
    //Client,
    //Server,
};

// Export Windlass
const Windlass = {
    Components,
    Extensions,
    Structures,
    Templates,
    Utilities,
};

module.exports = Windlass;
