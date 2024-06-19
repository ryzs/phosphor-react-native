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
const FireTruck = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fire-truck-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m251.71 118.51-14-35A12 12 0 0 0 226.58 76H188V64a4 4 0 0 0-8 0v102.71A28.05 28.05 0 0 0 164.29 188h-56.58a28 28 0 0 0-55.42 0H32a4 4 0 0 1-4-4v-48a4 4 0 0 0-8 0v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h56.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-64a4 4 0 0 0-.29-1.49ZM226.58 84a4 4 0 0 1 3.72 2.51L242.09 116H188V84ZM80 212a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm112 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm48-24h-20.29A28 28 0 0 0 188 164.29V124h56v60a4 4 0 0 1-4 4ZM24 100a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8h-20V68h20a4 4 0 0 0 0-8H24a4 4 0 0 0 0 8h20v32Zm100 0H92V68h32ZM52 68h32v32H52Z"
}));
var _default = exports.default = FireTruck;