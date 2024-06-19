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
const LegoSmiley = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lego-smiley-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M100 120a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm56-16a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm-2.13 44.62a49 49 0 0 1-51.74 0 4 4 0 0 0-4.26 6.77 57 57 0 0 0 60.26 0 4 4 0 0 0-4.26-6.76ZM212 80v96a28 28 0 0 1-24 27.71V224a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-20.29A28 28 0 0 1 44 176V80a28 28 0 0 1 28-28h20V32a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v20h20a28 28 0 0 1 28 28ZM100 52h56V32a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4Zm80 172v-20H76v20a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm24-144a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"
}));
var _default = exports.default = LegoSmiley;