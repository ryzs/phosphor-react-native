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
const Globe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 187a113.4 113.4 0 0 1-20.39-35h40.82a116.94 116.94 0 0 1-10 20.77A108.61 108.61 0 0 1 128 207Zm-26.49-59a135.42 135.42 0 0 1 0-40h53a135.42 135.42 0 0 1 0 40ZM44 128a83.49 83.49 0 0 1 2.43-20h30.82a160.63 160.63 0 0 0 0 40H46.43A83.49 83.49 0 0 1 44 128Zm84-79a113.4 113.4 0 0 1 20.39 35h-40.8a116.94 116.94 0 0 1 10-20.77A108.61 108.61 0 0 1 128 49Zm50.73 59h30.82a83.52 83.52 0 0 1 0 40h-30.8a160.63 160.63 0 0 0 0-40Zm20.77-24h-25.79a140.82 140.82 0 0 0-15.5-34.36A84.51 84.51 0 0 1 199.52 84ZM97.79 49.64A140.82 140.82 0 0 0 82.29 84H56.48a84.51 84.51 0 0 1 41.31-34.36ZM56.48 172h25.81a140.82 140.82 0 0 0 15.5 34.36A84.51 84.51 0 0 1 56.48 172Zm101.73 34.36a140.82 140.82 0 0 0 15.5-34.36h25.81a84.51 84.51 0 0 1-41.31 34.36Z"
}));
var _default = exports.default = Globe;