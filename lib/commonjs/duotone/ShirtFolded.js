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
const ShirtFolded = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shirt-folded-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 56v152a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h24v56a8 8 0 0 0 13.12 6.15L128 80l34.88 30.13A8 8 0 0 0 176 104V48h24a8 8 0 0 1 8 8Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 40h-20.69l-13.65-13.66A8 8 0 0 0 160 24H96a8 8 0 0 0-5.66 2.34L76.69 40H56a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-38.76 4.56 6.76 6.75V104l-29.43-25.44ZM88 51.31l6.76-6.75 22.67 34L88 104ZM56 56h16v48a15.85 15.85 0 0 0 9.21 14.49A16.1 16.1 0 0 0 88 120a15.89 15.89 0 0 0 10.2-3.73.52.52 0 0 0 .11-.1L120 97.48V208H56Zm144 152h-64V97.48l21.65 18.7a.52.52 0 0 0 .11.1A15.89 15.89 0 0 0 168 120a16.1 16.1 0 0 0 6.83-1.54A15.85 15.85 0 0 0 184 104V56h16Z"
}));
var _default = exports.default = ShirtFolded;