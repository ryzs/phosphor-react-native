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
const TeaBag = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tea-bag-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 164a20 20 0 0 1-20-20V64a52 52 0 0 0-104 0v12H76.53a12.06 12.06 0 0 0-10.29 5.83L45.71 116a12 12 0 0 0-1.71 6.22V216a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-93.78a12 12 0 0 0-1.71-6.18l-20.53-34.21A12.06 12.06 0 0 0 131.47 76H108V64a44 44 0 0 1 88 0v80a28 28 0 0 0 28 28 4 4 0 0 0 0-8Zm-92.53-80a4 4 0 0 1 3.43 1.94l20.53 34.22a4 4 0 0 1 .57 2.06V216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-93.78a4 4 0 0 1 .57-2.06L73.1 85.94A4 4 0 0 1 76.53 84H100v52a4 4 0 0 0 8 0V84Z"
}));
var _default = exports.default = TeaBag;