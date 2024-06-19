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
  className: "spray-bottle-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 78a6 6 0 0 0 6-6 54.06 54.06 0 0 0-54-54H80a14 14 0 0 0-14 14v48a26 26 0 0 1-26 26 6 6 0 0 0 0 12 38 38 0 0 0 38-38v-2h36v26.62a25.87 25.87 0 0 1-9.76 20.3l-16 12.79A37.81 37.81 0 0 0 74 167.38V224a14 14 0 0 0 14 14h104a14 14 0 0 0 14-14v-12.53A268.92 268.92 0 0 0 170.57 78ZM78 32a2 2 0 0 1 2-2h72a42.06 42.06 0 0 1 41.57 36H78Zm116 179.47V224a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2v-56.62a25.87 25.87 0 0 1 9.76-20.3l16-12.79A37.81 37.81 0 0 0 126 104.62V78h30.64A256.84 256.84 0 0 1 194 211.47Z"
}));
var _default = exports.default = SprayBottle;