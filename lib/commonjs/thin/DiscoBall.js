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
const DiscoBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "disco-ball-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M116 68.1V16a4 4 0 0 0-8 0v52.1a84 84 0 1 0 8 0Zm71.89 79.9h-40c-1-37.34-15.73-60.22-25.35-71.25A76.12 76.12 0 0 1 187.89 148ZM112 226.68C105 220 85.26 197.61 84.06 156h55.88c-1.2 41.61-20.94 64-27.94 70.68ZM84.06 148c1.2-41.61 21-64 27.94-70.68 7 6.64 26.74 29.07 27.94 70.68Zm17.36-71.25c-9.62 11-24.35 33.91-25.35 71.25h-40a76.12 76.12 0 0 1 65.35-71.25ZM36.11 156h40c1 37.34 15.73 60.22 25.35 71.25A76.12 76.12 0 0 1 36.11 156Zm86.47 71.25c9.62-11 24.35-33.91 25.35-71.25h40a76.12 76.12 0 0 1-65.35 71.25ZM252 88a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0V92h-12a4 4 0 0 1 0-8h12V72a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4Zm-40-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V44h-20a4 4 0 0 1 0-8h20V16a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = DiscoBall;