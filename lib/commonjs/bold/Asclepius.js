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
const Asclepius = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "asclepius-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M91.82 60H92a12 12 0 0 0 0-24H60a44.05 44.05 0 0 0-44 44v8a12 12 0 0 0 12 12h20a44.06 44.06 0 0 0 43.82-40ZM48 76h-7.6A20 20 0 0 1 60 60h7.6A20 20 0 0 1 48 76Zm176 3v1a44.05 44.05 0 0 1-44 44h-40v72h8a12 12 0 0 0 12-12 11.87 11.87 0 0 0-4-8.95 12 12 0 1 1 16-17.88A36 36 0 0 1 148 220h-8v12a12 12 0 0 1-24 0v-12H92a12 12 0 0 1 0-24h24v-72h-16a12 12 0 0 0-4 23.32A12 12 0 1 1 88 170a36 36 0 0 1 12-70h16V24a12 12 0 0 1 24 0v76h40a20 20 0 0 0 20-20v-1a19.05 19.05 0 0 0-19-19h-17a12 12 0 0 1 0-24h17a43.05 43.05 0 0 1 43 43Z"
}));
var _default = exports.default = Asclepius;