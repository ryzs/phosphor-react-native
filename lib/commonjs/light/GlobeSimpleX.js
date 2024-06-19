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
const GlobeSimpleX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-simple-x-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.24 172.24 200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48ZM230 128a6 6 0 0 1-6 6H94.13a128.29 128.29 0 0 0 18.68 62.37c9.35 15.11 18.85 22.88 18.95 22.95A6 6 0 0 1 128 230a102 102 0 1 1 102-102Zm-86.54-88.67c11.95 14.44 28.89 41.9 30.43 82.67h43.91a90.19 90.19 0 0 0-74.34-82.67Zm-30.65 20.3A128.29 128.29 0 0 0 94.13 122h67.74a128.29 128.29 0 0 0-18.68-62.37A109.19 109.19 0 0 0 128 40.18a109.19 109.19 0 0 0-15.19 19.45ZM38.2 122h43.91c1.54-40.77 18.48-68.23 30.43-82.67A90.19 90.19 0 0 0 38.2 122Zm43.91 12H38.2a90.19 90.19 0 0 0 74.34 82.67c-11.95-14.44-28.89-41.9-30.43-82.67Z"
}));
var _default = exports.default = GlobeSimpleX;