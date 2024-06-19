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
const Sock = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sock-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 18h-88a14 14 0 0 0-14 14v77.51l-39.33 39.34a56.91 56.91 0 1 0 80.48 80.48l68.41-68.4a21.88 21.88 0 0 0 6.44-15.56V32a14 14 0 0 0-14-14Zm-88 12h88a2 2 0 0 1 2 2v18h-92V32a2 2 0 0 1 2-2Zm18.67 190.85a44.92 44.92 0 0 1-63.52-63.52l41.09-41.09A6 6 0 0 0 102 112V62h92v44.34A54.07 54.07 0 0 0 146 160a53.39 53.39 0 0 0 8.47 29Zm68.4-68.41-27.85 27.86A41.54 41.54 0 0 1 158 160a42.05 42.05 0 0 1 36-41.56v26.93a9.93 9.93 0 0 1-2.93 7.07Z"
}));
var _default = exports.default = Sock;