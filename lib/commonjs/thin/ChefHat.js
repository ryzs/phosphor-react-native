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
const ChefHat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chef-hat-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 112a52.06 52.06 0 0 0-52-52 53 53 0 0 0-7.77.59 52 52 0 0 0-96.46 0A53 53 0 0 0 72 60a52 52 0 0 0-20 100v48a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-48a52.07 52.07 0 0 0 32-48Zm-40 96a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4v-45.41A52.13 52.13 0 0 0 72 164h112a52.13 52.13 0 0 0 12-1.41Zm-12-52h-18.88l6.76-27a4 4 0 0 0-7.76-1.94l-7.24 29H132V128a4 4 0 0 0-8 0v28H99.12l-7.24-29a4 4 0 1 0-7.76 2l6.76 27H72a44 44 0 0 1 0-88 45.3 45.3 0 0 1 5.34.33A51.68 51.68 0 0 0 76 80a4 4 0 0 0 8 0 44 44 0 0 1 88 0 4 4 0 0 0 8 0 51.68 51.68 0 0 0-1.34-11.67A45.3 45.3 0 0 1 184 68a44 44 0 0 1 0 88Z"
}));
var _default = exports.default = ChefHat;