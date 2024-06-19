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
const GlobeX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-x-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 0 0 0 204 6 6 0 0 0 3.76-10.67c-.1-.07-9.6-7.84-18.95-22.95A124 124 0 0 1 99.35 166H128a6 6 0 0 0 0-12H96.45a139.18 139.18 0 0 1 0-52h63.1a137.47 137.47 0 0 1 2.45 26 6 6 0 0 0 12 0 152.91 152.91 0 0 0-2.19-26h42.36a89.7 89.7 0 0 1 3.83 26 6 6 0 0 0 12 0A102.12 102.12 0 0 0 128 26Zm-15.46 13.33A132.58 132.58 0 0 0 86.81 90H46.43a90.29 90.29 0 0 1 66.11-50.67Zm0 177.34A90.29 90.29 0 0 1 46.43 166h40.38a132.58 132.58 0 0 0 25.73 50.67ZM84.19 154H41.83a90.17 90.17 0 0 1 0-52h42.36a155.43 155.43 0 0 0 0 52Zm15.16-64a124 124 0 0 1 13.46-30.37A109.19 109.19 0 0 1 128 40.18a109.19 109.19 0 0 1 15.19 19.45A124 124 0 0 1 156.65 90Zm69.84 0a132.58 132.58 0 0 0-25.73-50.67A90.29 90.29 0 0 1 209.57 90Zm51.05 82.24L200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48Z"
}));
var _default = exports.default = GlobeX;