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
const BoxingGlove = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boxing-glove-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 12h-48a60.08 60.08 0 0 0-59.87 56H56a36 36 0 0 0-36 36v29.19a20.13 20.13 0 0 0 4.38 12.5 11.46 11.46 0 0 0 .94 1L60 181v35a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-38.32l15.23-53.3a20.07 20.07 0 0 0 .77-5.5V72a60.07 60.07 0 0 0-60-60Zm36 106.32-15.54 54.38a12.28 12.28 0 0 0-.46 3.3v36H84v-36a12 12 0 0 0-3.56-8.53L44 131.45V104a12 12 0 0 1 12-12h4v12a12 12 0 0 0 24 0V72a36 36 0 0 1 36-36h48a36 36 0 0 1 36 36ZM166.66 162l-9 6 9 6a12 12 0 1 1-13.32 20L136 182.42 118.66 194a12 12 0 0 1-13.32-20l9-6-9-6a12 12 0 0 1 13.32-20L136 153.58 153.34 142a12 12 0 1 1 13.32 20Z"
}));
var _default = exports.default = BoxingGlove;