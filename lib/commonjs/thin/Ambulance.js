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
const Ambulance = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ambulance-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M84 120a4 4 0 0 1 4-4h20V96a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0v-20H88a4 4 0 0 1-4-4Zm168 0v64a12 12 0 0 1-12 12h-20.29a28 28 0 0 1-55.42 0h-56.58a28 28 0 0 1-55.42 0H32a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h152a4 4 0 0 1 4 4v12h38.58a12 12 0 0 1 11.15 7.54l14 35A4 4 0 0 1 252 120Zm-64-36v32h54.09L230.3 86.51a4 4 0 0 0-3.72-2.51ZM32 188h20.29a28 28 0 0 1 55.42 0h56.58A28.05 28.05 0 0 1 180 166.71V68H32a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4Zm68 4a20 20 0 1 0-20 20 20 20 0 0 0 20-20Zm112 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20Zm32-8v-60h-56v40.29A28 28 0 0 1 219.71 188H240a4 4 0 0 0 4-4Z"
}));
var _default = exports.default = Ambulance;