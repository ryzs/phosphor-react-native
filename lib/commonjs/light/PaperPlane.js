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
const PaperPlane = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paper-plane-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.17 201.09 140.1 33.16a14 14 0 0 0-24.41 0l-95.88 168a14 14 0 0 0 16.87 20.05L128 190.34l91.33 30.85a14.31 14.31 0 0 0 4.67.81 14 14 0 0 0 12.13-20.91Zm-10.66 8.18a1.87 1.87 0 0 1-2.2.6h-.1L134 179.7V120a6 6 0 0 0-12 0v59.7l-89.2 30.13h-.1a1.87 1.87 0 0 1-2.2-.6 1.84 1.84 0 0 1-.24-2.22L126.14 39a1.93 1.93 0 0 1 1.74-1 2 2 0 0 1 1.78 1.07L225.73 207a1.86 1.86 0 0 1-.22 2.27Z"
}));
var _default = exports.default = PaperPlane;