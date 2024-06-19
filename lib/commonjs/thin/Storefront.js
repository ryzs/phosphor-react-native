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
const Storefront = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "storefront-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M28.15 95a3.81 3.81 0 0 0-.15 1v16a36 36 0 0 0 16 29.92V216a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-74.08A36 36 0 0 0 228 112V96a3.81 3.81 0 0 0-.17-1.08L213.5 44.7A12 12 0 0 0 202 36H54a12 12 0 0 0-11.5 8.7Zm22-48.08A4 4 0 0 1 54 44h148a4 4 0 0 1 3.84 2.9L218.7 92H37.3ZM100 100h56v12a28 28 0 0 1-56 0Zm-64 12v-12h56v12a28 28 0 0 1-41.37 24.59 4 4 0 0 0-1.31-.76A28 28 0 0 1 36 112Zm168 100H52v-66.06a36 36 0 0 0 44-17.48 36 36 0 0 0 64 0 36 36 0 0 0 44 17.48Zm2.68-76.17a3.94 3.94 0 0 0-1.3.76A28 28 0 0 1 164 112v-12h56v12a28 28 0 0 1-13.32 23.83Z"
}));
var _default = exports.default = Storefront;