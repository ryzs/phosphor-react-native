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
  className: "chef-hat-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M238 112a54.06 54.06 0 0 0-54-54 54.6 54.6 0 0 0-6.52.4 54 54 0 0 0-99 0A54.6 54.6 0 0 0 72 58a54 54 0 0 0-22 103.3V208a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-46.7a54.07 54.07 0 0 0 32-49.3Zm-44 96a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2v-42.94a54 54 0 0 0 10 .94h112a54 54 0 0 0 10-.94Zm-10-54h-16.31l6.13-24.54a6 6 0 1 0-11.64-2.92L155.31 154H134v-26a6 6 0 0 0-12 0v26h-21.31l-6.87-27.46a6 6 0 0 0-11.64 2.92L88.31 154H72a42 42 0 0 1 0-84c1 0 2 0 2.92.11A54.63 54.63 0 0 0 74 80a6 6 0 0 0 12 0 42 42 0 0 1 84 0 6 6 0 0 0 12 0 54.63 54.63 0 0 0-.92-9.89c1-.06 1.94-.11 2.92-.11a42 42 0 0 1 0 84Z"
}));
var _default = exports.default = ChefHat;