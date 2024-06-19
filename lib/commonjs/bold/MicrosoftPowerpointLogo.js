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
const MicrosoftPowerpointLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "microsoft-powerpoint-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M94 88H76a12 12 0 0 0-12 12v52a12 12 0 0 0 24 0v-4h6a30 30 0 0 0 0-60Zm0 36h-6v-12h6a6 6 0 0 1 0 12Zm42-104a108.16 108.16 0 0 0-76.73 32H40a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h15.5A108 108 0 1 0 136 20Zm0 24a84.12 84.12 0 0 1 83.13 72H164V72a20 20 0 0 0-20-20h-43.73A83.88 83.88 0 0 1 136 44ZM44 76h96v100H44Zm92 136a83.67 83.67 0 0 1-43.32-12H144a20 20 0 0 0 20-20v-40h55.13A84.12 84.12 0 0 1 136 212Z"
}));
var _default = exports.default = MicrosoftPowerpointLogo;