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
const Star = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.36 98.49A12.21 12.21 0 0 0 224.59 90l-61.47-5-23.68-57.33a12.37 12.37 0 0 0-22.88 0L92.88 85l-61.47 5a12.45 12.45 0 0 0-7.07 21.84l46.85 40.41-14.32 60.39a12.35 12.35 0 0 0 18.51 13.49L128 193.77l52.62 32.36a12.12 12.12 0 0 0 13.69-.51 12.28 12.28 0 0 0 4.82-13l-14.32-60.42 46.85-40.41a12.29 12.29 0 0 0 3.7-13.3Zm-8.93 7.26-48.68 42a4 4 0 0 0-1.28 3.95l14.87 62.79a4.37 4.37 0 0 1-1.72 4.65 4.24 4.24 0 0 1-4.81.18l-54.71-33.65a4 4 0 0 0-4.2 0l-54.71 33.65a4.24 4.24 0 0 1-4.81-.18 4.37 4.37 0 0 1-1.72-4.65l14.87-62.79a4 4 0 0 0-1.28-3.95l-48.68-42a4.37 4.37 0 0 1-1.32-4.75 4.31 4.31 0 0 1 3.81-3L96 92.79a4 4 0 0 0 3.38-2.46L124 30.73a4.35 4.35 0 0 1 8.08 0l24.62 59.6a4 4 0 0 0 3.3 2.46l63.9 5.15a4.31 4.31 0 0 1 3.81 3 4.37 4.37 0 0 1-1.28 4.81Z"
}));
var _default = exports.default = Star;