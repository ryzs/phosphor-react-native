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
const Tornado = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tornado-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228 40a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h168a4 4 0 0 1 4 4Zm-48 32a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h144a4 4 0 0 0 4-4Zm-16 32a4 4 0 0 0-4-4H56a4 4 0 0 0 0 8h104a4 4 0 0 0 4-4Zm16 32a4 4 0 0 0-4-4H88a4 4 0 0 0 0 8h88a4 4 0 0 0 4-4Zm4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8Zm-24 32h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm-32 32h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8Z"
}));
var _default = exports.default = Tornado;