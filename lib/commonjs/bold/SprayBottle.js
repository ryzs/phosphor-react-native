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
  className: "spray-bottle-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 84a12 12 0 0 0 12-12 60.07 60.07 0 0 0-60-60H80a20 20 0 0 0-20 20v48a20 20 0 0 1-20 20 12 12 0 0 0 0 24 44.06 44.06 0 0 0 43.82-40H108v20.62a19.92 19.92 0 0 1-7.51 15.62L84.51 133A43.8 43.8 0 0 0 68 167.38V224a20 20 0 0 0 20 20h104a20 20 0 0 0 20-20v-12.53A274.77 274.77 0 0 0 180.68 84ZM84 36h68a36 36 0 0 1 33.94 24H84Zm104 175.47V220H92v-52.62a19.92 19.92 0 0 1 7.51-15.62l16-12.78A43.8 43.8 0 0 0 132 104.62V84h21.24A250.93 250.93 0 0 1 188 211.47Z"
}));
var _default = exports.default = SprayBottle;