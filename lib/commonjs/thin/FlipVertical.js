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
const FlipVertical = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flip-vertical-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56 116h160a12 12 0 0 0 4.6-23.09l-160-64A12 12 0 0 0 44 40v64a12 12 0 0 0 12 12Zm-4-76a4 4 0 0 1 4-4 4 4 0 0 1 1.57.32h.07l159.91 64A4 4 0 0 1 216 108H56a4 4 0 0 1-4-4Zm175.74 109.61A11.75 11.75 0 0 0 216 140H56a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12 11.8 11.8 0 0 0 4.59-.93l160-64h.08a11.75 11.75 0 0 0 7.07-13.46Zm-10.17 6.06-160 64A4 4 0 0 1 52 216v-64a4 4 0 0 1 4-4h160a4 4 0 0 1 1.59 7.67Z"
}));
var _default = exports.default = FlipVertical;