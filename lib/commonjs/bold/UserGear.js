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
const UserGear = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-gear-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M148.5 156.53a72 72 0 1 0-89 0 124 124 0 0 0-48.69 35.75 12 12 0 0 0 18.38 15.44C48.54 184.69 75.11 172 104 172c37 0 61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44 124 124 0 0 0-48.69-35.75ZM56 100a48 48 0 1 1 48 48 48.05 48.05 0 0 1-48-48Zm190.53 40-7.11 2.31 4.39 6.05a12 12 0 1 1-19.41 14.11l-4.4-6.06-4.4 6.06a12 12 0 1 1-19.41-14.11l4.39-6.05-7.11-2.31a12 12 0 1 1 7.41-22.83l7.12 2.31V112a12 12 0 0 1 24 0v7.48l7.12-2.31a12 12 0 1 1 7.41 22.83Z"
}));
var _default = exports.default = UserGear;