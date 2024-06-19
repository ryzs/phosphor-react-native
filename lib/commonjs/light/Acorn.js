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
const Acorn = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "acorn-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230 104a54.06 54.06 0 0 0-54-54h-42v-2a26 26 0 0 1 26-26 6 6 0 0 0 0-12 38 38 0 0 0-38 38v2H80a54.06 54.06 0 0 0-54 54 14 14 0 0 0 8 12.63V128c0 34.57 32.71 60.83 59 81.93 14.26 11.45 29 23.29 29 30.07a6 6 0 0 0 12 0c0-6.78 14.75-18.62 29-30.07 26.28-21.1 59-47.36 59-81.93v-11.37a14 14 0 0 0 8-12.63ZM80 62h96a42 42 0 0 1 42 42 2 2 0 0 1-2 2H40a2 2 0 0 1-2-2 42 42 0 0 1 42-42Zm75.5 138.58c-11.48 9.21-21.48 17.24-27.5 25-6-7.72-16-15.75-27.5-25C76.22 181.08 46 156.82 46 128v-10h164v10c0 28.82-30.22 53.08-54.5 72.58Z"
}));
var _default = exports.default = Acorn;