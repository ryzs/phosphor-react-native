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
  className: "crown-cross-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 60c-15.15 0-29.15 5.06-39.43 14.25a49.31 49.31 0 0 0-8.57 10V36h20a4 4 0 0 0 0-8h-20V8a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v48.26a49.31 49.31 0 0 0-8.57-10C105.15 65.06 91.15 60 76 60a56.06 56.06 0 0 0-56 56c0 28.36 13.79 46.38 25.37 56.51A85.57 85.57 0 0 0 68 186.74V208a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-21.26a85.57 85.57 0 0 0 22.63-14.23C222.21 162.38 236 144.36 236 116a56.06 56.06 0 0 0-56-56Zm25.59 106.29a75.53 75.53 0 0 1-22.85 13.92A4 4 0 0 0 180 184v24a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4v-24a4 4 0 0 0-2.73-3.79 75.38 75.38 0 0 1-22.86-13.92C35.54 153.17 28 136.25 28 116a48.05 48.05 0 0 1 48-48c27.81 0 48 18.5 48 44v64a4 4 0 0 0 8 0v-64c0-25.5 20.19-44 48-44a48.05 48.05 0 0 1 48 48c0 20.25-7.54 37.17-22.41 50.29Z"
}));
var _default = exports.default = CrownCross;