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
  className: "bulldozer-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 176a32 32 0 0 1-32 32H40a32 32 0 0 1-32-32 32 32 0 0 1 32-32h120a32 32 0 0 1 32 32Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.09 40.09 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16Zm-100-64H64V56h50.67ZM48 56v80h-8a39.72 39.72 0 0 0-16 3.35V56Zm112 144H40a24 24 0 0 1 0-48h120a24 24 0 0 1 0 48Zm8-24a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h120a8 8 0 0 1 8 8Z"
}));
var _default = exports.default = Bulldozer;