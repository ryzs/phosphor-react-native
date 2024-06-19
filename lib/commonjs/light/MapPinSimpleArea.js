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
const MapPinSimpleArea = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "map-pin-simple-area-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M122 101.52V176a6 6 0 0 0 12 0v-74.48a38 38 0 1 0-12 0ZM128 38a26 26 0 1 1-26 26 26 26 0 0 1 26-26Zm110 138c0 13.34-12.18 25.38-34.31 33.88C183.38 217.7 156.5 222 128 222s-55.38-4.3-75.69-12.12C30.18 201.38 18 189.34 18 176c0-19.6 26.46-36 69.05-42.86A6 6 0 0 1 89 145c-18 2.89-33.27 7.66-44.09 13.78C35.28 164.2 30 170.32 30 176c0 16.08 40.25 34 98 34s98-17.92 98-34c0-5.68-5.28-11.8-14.86-17.23-10.82-6.12-26.07-10.89-44.09-13.78a6 6 0 0 1 1.9-11.85C211.54 140 238 156.4 238 176Z"
}));
var _default = exports.default = MapPinSimpleArea;