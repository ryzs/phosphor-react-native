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
const Eyes = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "eyes-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 34c-21.15 0-39.1 20.15-48 50.26C119.1 54.15 101.15 34 80 34c-30.28 0-54 41.29-54 94s23.72 94 54 94c21.15 0 39.1-20.15 48-50.26 8.9 30.11 26.85 50.26 48 50.26 30.28 0 54-41.29 54-94s-23.72-94-54-94ZM80 210c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C45.81 70.1 61.76 46 80 46c22.77 0 42 37.55 42 82s-19.23 82-42 82Zm-42-82a18 18 0 1 1 18 18 18 18 0 0 1-18-18Zm138 82c-18.24 0-34.19-24.1-39.83-56.53a30 30 0 1 0 0-50.94C141.81 70.1 157.76 46 176 46c22.77 0 42 37.55 42 82s-19.23 82-42 82Zm-42-82a18 18 0 1 1 18 18 18 18 0 0 1-18-18Z"
}));
var _default = exports.default = Eyes;