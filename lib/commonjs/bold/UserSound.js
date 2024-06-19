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
const UserSound = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-sound-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152.5 164.53a72 72 0 1 0-89 0 124.08 124.08 0 0 0-48.69 35.75 12 12 0 0 0 18.38 15.44C46.88 199.42 71 180 108 180s61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44 124 124 0 0 0-48.69-35.75ZM60 108a48 48 0 1 1 48 48 48.05 48.05 0 0 1-48-48Zm192 0a143.09 143.09 0 0 1-11.61 56.73 12 12 0 1 1-22-9.46 120.48 120.48 0 0 0 0-94.54 12 12 0 1 1 22-9.46A143.09 143.09 0 0 1 252 108Zm-45-43.24a108.26 108.26 0 0 1 0 86.48 12 12 0 0 1-22-9.62 84.35 84.35 0 0 0 0-67.24 12 12 0 1 1 22-9.62Z"
}));
var _default = exports.default = UserSound;