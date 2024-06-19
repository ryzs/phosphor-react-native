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
const Pipe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pipe-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 106h-26V54h26a6 6 0 0 0 0-12h-27.37A14 14 0 0 0 192 34h-16a14 14 0 0 0-12.63 8H144A102.12 102.12 0 0 0 42 144v19.37A14 14 0 0 0 34 176v16a14 14 0 0 0 8 12.63V232a6 6 0 0 0 12 0v-26h52v26a6 6 0 0 0 12 0v-27.37a14 14 0 0 0 8-12.63v-16a14 14 0 0 0-8-12.63V144a26 26 0 0 1 26-26h19.37a14 14 0 0 0 12.63 8h16a14 14 0 0 0 12.63-8H232a6 6 0 0 0 0-12Zm-120 68a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2Zm-6-30v18H54v-18a90.1 90.1 0 0 1 90-90h18v52h-18a38 38 0 0 0-38 38Zm86-30h-16a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v64a2 2 0 0 1-2 2Z"
}));
var _default = exports.default = Pipe;