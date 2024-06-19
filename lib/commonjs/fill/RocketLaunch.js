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
const RocketLaunch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rocket-launch-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M101.85 191.14C97.34 201 82.29 224 40 224a8 8 0 0 1-8-8c0-42.29 23-57.34 32.86-61.85a8 8 0 0 1 6.64 14.56c-6.43 2.93-20.62 12.36-23.12 38.91 26.55-2.5 36-16.69 38.91-23.12a8 8 0 1 1 14.56 6.64Zm122-144a16 16 0 0 0-15-15c-12.58-.75-44.73.4-71.4 27.07L88 108.7a8 8 0 0 1-11.33-11.31l26.56-26.57a4 4 0 0 0-2.82-6.82H74.35A15.9 15.9 0 0 0 63 68.68L28.7 103a16 16 0 0 0 9.07 27.16l38.47 5.37 44.21 44.21 5.37 38.49a15.94 15.94 0 0 0 10.78 12.92 16.11 16.11 0 0 0 5.1.83 15.91 15.91 0 0 0 11.3-4.68l34.32-34.3a16 16 0 0 0 4.68-11.35v-26.06a4 4 0 0 0-6.83-2.82l-26.57 26.56a8 8 0 0 1-11.71-.42 8.2 8.2 0 0 1 .6-11.1l49.27-49.27c26.69-26.68 27.84-58.83 27.09-71.42Z"
}));
var _default = exports.default = RocketLaunch;