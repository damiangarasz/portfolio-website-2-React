"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Header_1 = require("./Header");
var App = function () {
    (0, jsx_runtime_1.jsx)(Header_1.default, {});
};
var container = document.getElementById("root");
var root = react_dom_1.default.createRoot(container);
root.render(react_1.default.createElement(App));
