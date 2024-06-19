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
const CrownCross = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crown-cross-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 58c-19.15 0-35.57 7.79-46 20.32V38h18a6 6 0 0 0 0-12h-18V8a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v40.32C111.57 65.79 95.15 58 76 58a58.07 58.07 0 0 0-58 58c0 29.11 14.17 47.62 26.05 58a87.74 87.74 0 0 0 22 14v20a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-19.95A87.74 87.74 0 0 0 212 174c11.88-10.39 26.05-28.9 26.05-58A58.07 58.07 0 0 0 180 58Zm2.1 120.31A6 6 0 0 0 178 184v24a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2v-24a6 6 0 0 0-4.1-5.69C73.46 178.16 30 163.13 30 116a46.06 46.06 0 0 1 46-46c26.65 0 46 17.66 46 42v64a6 6 0 0 0 12 0v-64c0-24.34 19.35-42 46-42a46.06 46.06 0 0 1 46 46c0 46.9-42.12 61.71-43.9 62.31Z"
}));
var _default = exports.default = CrownCross;