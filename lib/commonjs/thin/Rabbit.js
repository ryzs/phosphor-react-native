"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* GENERATED FILE */
const Rabbit = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rabbit-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M108 164a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm48-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm56 32a48 48 0 0 1-84 31.75 48 48 0 1 1-67.51-68 67.64 67.64 0 0 1 7-22.78C48.85 92.61 36.63 41.7 49.06 21.15a17.92 17.92 0 0 1 16-9.15c12.17 0 23.19 11.41 32.76 33.92 6.71 15.78 11.55 34.08 14.63 47.87a68.44 68.44 0 0 1 31.1 0c3.08-13.8 7.92-32.09 14.63-47.87C167.75 23.41 178.77 12 190.94 12a17.92 17.92 0 0 1 16 9.15c12.43 20.55.21 71.46-18.4 107.86a67.64 67.64 0 0 1 7 22.78A47.81 47.81 0 0 1 212 188Zm-60.77-91.9a67.9 67.9 0 0 1 22.63 13.69 69 69 0 0 1 9.78 11.11c17.88-37.07 25.59-80.5 16.45-95.61a9.91 9.91 0 0 0-9.15-5.29c-14.4 0-29.16 28.37-39.71 76.1Zm-78.87 24.8a69 69 0 0 1 9.78-11.11 67.9 67.9 0 0 1 22.63-13.69C94.22 48.37 79.46 20 65.06 20a9.91 9.91 0 0 0-9.15 5.29c-9.14 15.11-1.43 58.54 16.45 95.61ZM204 188a39.86 39.86 0 0 0-14.82-31.08 4 4 0 0 1-1.46-2.72 60 60 0 0 0-119.44 0 4 4 0 0 1-1.46 2.72 40 40 0 1 0 55.64 57l-13-10.82a4 4 0 1 1 5.12-6.16L128 208.1l13.44-11.18a4 4 0 0 1 5.12 6.16l-13 10.82A40 40 0 0 0 204 188Z"
}));
var _default = exports.default = Rabbit;