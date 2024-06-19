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
const CowboyHat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cowboy-hat-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 116a12 12 0 0 0-10.18 5.64q-2.48 4-5 7.57l-14.57-76.88A20 20 0 0 0 150.1 40.4l-.18.15L128 58.8l-21.92-18.25-.18-.15a20 20 0 0 0-32.15 11.9l-14.61 76.92q-2.49-3.61-5-7.57A12 12 0 0 0 44 116a44 44 0 1 0 0 88h168a44 44 0 1 0 0-88ZM96.07 63.44l19.25 16 .19.15a19.89 19.89 0 0 0 25 0l.19-.15 19.25-16L171.44 124H84.56ZM44 180a20 20 0 0 1-5.94-39.1c11.7 17.38 23.7 30 35 39.1Zm35-26.75 1-5.25h96l1 5.25c-25.33 25-46.71 26.65-49 26.75-2.29-.1-23.67-1.71-49-26.75ZM212 180h-29c11.28-9.12 23.28-21.72 35-39.1a20 20 0 0 1-6 39.1Z"
}));
var _default = exports.default = CowboyHat;