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
const Link = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "link-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m218.34 119.6-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.39 38.39 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0 54.86 54.86 0 0 1 16 40.23Zm-131 97.43-11 11A38.41 38.41 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4 8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34Z"
}));
var _default = exports.default = Link;