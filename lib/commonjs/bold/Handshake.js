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
const Handshake = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "handshake-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m253.88 108.11-25.53-51a20 20 0 0 0-26.83-9L178.34 59.7 131.7 44.58a12.14 12.14 0 0 0-7.4 0L77.66 59.7 54.48 48.11a20 20 0 0 0-26.83 9l-25.53 51a20 20 0 0 0 9 26.83l26.67 13.34 51.18 37.41a12.15 12.15 0 0 0 4.03 1.93l62 16a12.27 12.27 0 0 0 3 .38 12 12 0 0 0 8.48-3.52l52.62-52.62 25.83-12.92a20 20 0 0 0 8.95-26.83Zm-58.12 29.15-27.52-26a12 12 0 0 0-16.76.26c-9.66 9.74-25.06 16.81-40.81 9.55l38.19-37h22.72l25.81 51.63ZM47.32 71.37 60.59 78l-22 43.9-13.27-6.63Zm107 107.3L101.23 165l-42-30.66L85.17 82.5 128 68.61l1.69.55L90 107.68l-.13.12a20 20 0 0 0 3.4 31c20.95 13.39 46 12.07 66.33-2.73l19.2 18.15Zm63-56.77-22-43.9 13.27-6.63 21.95 43.9ZM118.55 219a12 12 0 0 1-14.62 8.62l-26.6-6.87a12 12 0 0 1-4.08-1.93L48.92 201a12 12 0 0 1 14.16-19.37l22.47 16.42 24.38 6.29a12 12 0 0 1 8.62 14.66Z"
}));
var _default = exports.default = Handshake;