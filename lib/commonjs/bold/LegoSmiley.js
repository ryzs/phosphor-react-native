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
  className: "lego-smiley-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M84 112a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm72-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm-6.4 45.85a41 41 0 0 1-43.2 0 12 12 0 1 0-12.8 20.3 65 65 0 0 0 68.8 0 12 12 0 1 0-12.8-20.3ZM220 84v88a36.07 36.07 0 0 1-24 33.94V224a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20v-18.06A36.07 36.07 0 0 1 36 172V84a36 36 0 0 1 36-36h12V32a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v16h12a36 36 0 0 1 36 36ZM108 48h40V36h-40Zm64 172v-12H84v12Zm24-136a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z"
}));
var _default = exports.default = LegoSmiley;