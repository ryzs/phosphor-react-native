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
  className: "lego-smiley-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 80v96a24 24 0 0 1-24 24H72a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M100 124a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm56-24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm-4.27 45.23a45 45 0 0 1-47.46 0 8 8 0 0 0-8.54 13.54 61 61 0 0 0 64.54 0 8 8 0 0 0-8.54-13.54ZM216 80v96a32.06 32.06 0 0 1-24 31v17a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-17a32.06 32.06 0 0 1-24-31V80a32 32 0 0 1 32-32h16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16h16a32 32 0 0 1 32 32ZM104 48h48V32h-48Zm72 176v-16H80v16Zm24-144a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z"
}));
var _default = exports.default = LegoSmiley;