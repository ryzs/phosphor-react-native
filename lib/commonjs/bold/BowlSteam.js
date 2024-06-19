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
const BowlSteam = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bowl-steam-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 108H32a12 12 0 0 0-12 12 108.38 108.38 0 0 0 56 94.68V216a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-1.32A108.38 108.38 0 0 0 236 120a12 12 0 0 0-12-12Zm-61 88.39a12 12 0 0 0-7 10.9V212h-56v-4.71a12 12 0 0 0-7-10.9A84.32 84.32 0 0 1 44.87 132h166.26A84.32 84.32 0 0 1 163 196.39ZM74.93 50.15a26.32 26.32 0 0 0 4.71-7 12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3 2.71 9.14-.67 19.26-10 30.08a26.32 26.32 0 0 0-4.71 7A12 12 0 0 1 84 96a11.81 11.81 0 0 1-3.33-.47C75 93.89 67.46 88.9 64.89 80.23c-2.71-9.14.67-19.23 10.04-30.08Zm44 0a26.32 26.32 0 0 0 4.71-7 12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3 2.71 9.14-.67 19.26-10 30.08a26.32 26.32 0 0 0-4.71 7A12 12 0 0 1 128 96a11.81 11.81 0 0 1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3-2.71-9.14.67-19.23 10.04-30.08Zm44 0a26.32 26.32 0 0 0 4.71-7 12 12 0 0 1 7.7-22.7c5.67 1.64 13.2 6.63 15.77 15.3 2.71 9.14-.67 19.26-10 30.08a26.32 26.32 0 0 0-4.71 7A12 12 0 0 1 172 96a11.81 11.81 0 0 1-3.33-.47c-5.67-1.64-13.21-6.63-15.78-15.3-2.71-9.14.67-19.23 10.04-30.08Z"
}));
var _default = exports.default = BowlSteam;