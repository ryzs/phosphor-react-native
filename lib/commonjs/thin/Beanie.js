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
const Beanie = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "beanie-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 164.7V144a92.15 92.15 0 0 0-75.57-90.53 24 24 0 1 0-32.86 0A92.15 92.15 0 0 0 36 144v20.7a12 12 0 0 0-8 11.3v32a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-32a12 12 0 0 0-8-11.3ZM112 36a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm16 24a84.09 84.09 0 0 1 84 84v20H44v-20a84.09 84.09 0 0 1 84-84Zm-4 112v40H76v-40Zm8 0h48v40h-48Zm-96 36v-32a4 4 0 0 1 4-4h28v40H40a4 4 0 0 1-4-4Zm184 0a4 4 0 0 1-4 4h-28v-40h28a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Beanie;