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
const ScanSmiley = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scan-smiley-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 40v36a4 4 0 0 1-8 0V44h-32a4 4 0 0 1 0-8h36a4 4 0 0 1 4 4Zm-4 136a4 4 0 0 0-4 4v32h-32a4 4 0 0 0 0 8h36a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4ZM76 212H44v-32a4 4 0 0 0-8 0v36a4 4 0 0 0 4 4h36a4 4 0 0 0 0-8ZM40 80a4 4 0 0 0 4-4V44h32a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4Zm88 116a68 68 0 1 1 68-68 68.07 68.07 0 0 1-68 68Zm60-68a60 60 0 1 0-60 60 60.07 60.07 0 0 0 60-60Zm-76-12a8 8 0 1 0-8 8 8 8 0 0 0 8-8Zm40-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm-2.65 41c-4.52 4-13.7 7-21.35 7s-16.83-3-21.35-7a4 4 0 0 0-5.3 6c6 5.3 17 9 26.65 9s20.64-3.7 26.65-9a4 4 0 1 0-5.3-6Z"
}));
var _default = exports.default = ScanSmiley;