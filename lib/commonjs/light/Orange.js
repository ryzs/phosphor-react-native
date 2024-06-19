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
const Orange = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "orange-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M161.15 72.65A62.08 62.08 0 0 0 198 16a6 6 0 0 0-6-6h-8a62.08 62.08 0 0 0-56 35.42A62.08 62.08 0 0 0 72 10h-8a6 6 0 0 0 0 12h8a50.06 50.06 0 0 1 49.66 44.26 85.95 85.95 0 1 0 39.49 6.39ZM184 22h1.64A50.07 50.07 0 0 1 136 66h-1.64A50.07 50.07 0 0 1 184 22Zm-56 204a74 74 0 1 1 74-74 74.09 74.09 0 0 1-74 74Zm53.92-65A55.48 55.48 0 0 1 137 205.92a6.74 6.74 0 0 1-1 .08 6 6 0 0 1-1-11.92A43.29 43.29 0 0 0 170.08 159a6 6 0 1 1 11.84 2Z"
}));
var _default = exports.default = Orange;