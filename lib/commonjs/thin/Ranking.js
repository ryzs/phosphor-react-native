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
const Ranking = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ranking-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M116.21 101.26a4 4 0 0 1 2.53-5.05l12-4A4 4 0 0 1 136 96v40a4 4 0 0 1-8 0v-34.45l-6.74 2.24a4 4 0 0 1-5.05-2.53ZM244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h12V104a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v76h44a12 12 0 0 1 12 12v60h12a4 4 0 0 1 4 4Zm-72-68v64h48v-60a4 4 0 0 0-4-4Zm-80 64h72V56a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Zm-56 0h48V100H40a4 4 0 0 0-4 4Z"
}));
var _default = exports.default = Ranking;