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
const Invoice = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "invoice-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M28 126a6 6 0 0 1 0-12h28a10 10 0 0 0 0-20H40a22 22 0 0 1 0-44h2v-2a6 6 0 0 1 12 0v2h10a6 6 0 0 1 0 12H40a10 10 0 0 0 0 20h16a22 22 0 0 1 0 44h-2v2a6 6 0 0 1-12 0v-2Zm202-70v136a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-40a6 6 0 0 1 12 0v40a2 2 0 0 0 2 2h122v-36H80a6 6 0 0 1 0-12h82v-36h-58a6 6 0 0 1 0-12h114V62H96a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6Zm-56 90h44v-36h-44Zm44 46v-34h-44v36h42a2 2 0 0 0 2-2Z"
}));
var _default = exports.default = Invoice;