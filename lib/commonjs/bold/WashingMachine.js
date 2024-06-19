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
const WashingMachine = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "washing-machine-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm72-36v168a20 20 0 0 1-20 20H44a20 20 0 0 1-20-20V44a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20Zm-24 4H48v160h160Zm-68.49 75.51-16 16a12 12 0 0 0 17 17l16-16a12 12 0 1 0-17-17Zm-15-16a12 12 0 0 0-17 0l-8 8a12 12 0 0 0 17 17l8-8a12 12 0 0 0-.02-17ZM128 196a68.05 68.05 0 0 0 67.19-78.52 12 12 0 0 0-23.72 3.69 44 44 0 1 1-36.64-36.64 12 12 0 0 0 3.69-23.72A68 68 0 1 0 128 196Z"
}));
var _default = exports.default = WashingMachine;