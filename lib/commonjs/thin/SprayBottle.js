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
const SprayBottle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spray-bottle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 76a4 4 0 0 0 4-4 52.06 52.06 0 0 0-52-52H80a12 12 0 0 0-12 12v48a28 28 0 0 1-28 28 4 4 0 0 0 0 8 36 36 0 0 0 36-36v-4h40v28.62a27.85 27.85 0 0 1-10.51 21.86l-16 12.79A35.8 35.8 0 0 0 76 167.38V224a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-12.53A266.86 266.86 0 0 0 167.09 76ZM76 32a4 4 0 0 1 4-4h72a44.06 44.06 0 0 1 43.82 40H76Zm120 179.47V224a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-56.62a27.85 27.85 0 0 1 10.51-21.86l16-12.79A35.8 35.8 0 0 0 124 104.62V76h33.76A258.83 258.83 0 0 1 196 211.47Z"
}));
var _default = exports.default = SprayBottle;