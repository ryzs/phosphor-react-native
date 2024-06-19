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
const Bulldozer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bulldozer-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 196h-8a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h8a12 12 0 0 0 0-24h-8a28 28 0 0 0-28 28v4h-9.68a44.13 44.13 0 0 0-34-31.2l-35.2-84.49A20 20 0 0 0 110.67 36H24A20 20 0 0 0 4 56v101.7A44 44 0 0 0 44 220h112a44.06 44.06 0 0 0 42.32-32H208v4a28 28 0 0 0 28 28h8a12 12 0 0 0 0-24Zm-106-64H68V60h40ZM44 60v72a43.85 43.85 0 0 0-16 3V60Zm112 136H44a20 20 0 0 1 0-40h112a20 20 0 0 1 0 40Z"
}));
var _default = exports.default = Bulldozer;