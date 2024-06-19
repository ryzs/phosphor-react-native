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
const ListStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "list-star-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12Zm12 76h48a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm64 40H40a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Zm135.64-33.13-20.58 17 6.25 25.26a12 12 0 0 1-17.73 13.22L184 188.46l-23.58 13.88a12 12 0 0 1-17.73-13.22l6.25-25.26-20.58-17a12 12 0 0 1 6.72-21.22l27.42-2.12L173 99.25a12 12 0 0 1 22 0l10.48 24.28 27.42 2.12a12 12 0 0 1 6.72 21.22Zm-38.21.42-5-.39a12 12 0 0 1-10.09-7.21l-2.33-5.4-2.33 5.4a12 12 0 0 1-10.1 7.21l-5 .39 3.48 2.87a12 12 0 0 1 4 12.13l-1.21 4.89 5.07-3a12.06 12.06 0 0 1 12.18 0l5.07 3-1.17-4.89a12 12 0 0 1 4-12.13Z"
}));
var _default = exports.default = ListStar;