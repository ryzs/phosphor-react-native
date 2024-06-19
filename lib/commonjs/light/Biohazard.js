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
const Biohazard = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "biohazard-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184.35 106.18a61.77 61.77 0 0 0-4-7.33 58 58 0 0 0-25.58-76.38 6 6 0 1 0-5.54 10.64 46 46 0 0 1 22.51 55 61.89 61.89 0 0 0-87.5 0 46 46 0 0 1 22.53-55 6 6 0 0 0-5.54-10.64 58 58 0 0 0-25.59 76.4 60.67 60.67 0 0 0-4 7.31A58.06 58.06 0 0 0 18 164a6 6 0 0 0 12 0 46.08 46.08 0 0 1 37.43-45.19 61.95 61.95 0 0 0 45 73.21 46 46 0 0 1-61.2 10.75 6 6 0 0 0-6.48 10.11 58 58 0 0 0 80.9-18.94c.77 0 1.55.06 2.34.06s1.57 0 2.34-.06a58 58 0 0 0 80.9 18.94 6 6 0 0 0-6.48-10.11A46 46 0 0 1 143.56 192a61.95 61.95 0 0 0 45-73.21A46.08 46.08 0 0 1 226 164a6 6 0 0 0 12 0 58.06 58.06 0 0 0-53.65-57.82ZM128 82a49.87 49.87 0 0 1 38.09 17.67 46 46 0 0 1-76.19 0A49.86 49.86 0 0 1 128 82Zm3.8 49.79a56.82 56.82 0 0 0-3.8 6.56 58.24 58.24 0 0 0-3.79-6.56c1.25.08 2.51.13 3.78.13s2.55-.05 3.81-.13ZM78 132a49.68 49.68 0 0 1 2-13.82A46.06 46.06 0 0 1 122 164a45.59 45.59 0 0 1-3.32 17.12A50.07 50.07 0 0 1 78 132Zm59.32 49.12A45.59 45.59 0 0 1 134 164a46.06 46.06 0 0 1 42-45.82 50 50 0 0 1-38.72 62.94Z"
}));
var _default = exports.default = Biohazard;