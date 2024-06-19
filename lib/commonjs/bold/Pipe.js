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
const Pipe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pipe-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 100h-16V60h16a12 12 0 0 0 0-24h-20a20 20 0 0 0-16-8h-24a20 20 0 0 0-16 8h-12A108.12 108.12 0 0 0 36 144v12a20 20 0 0 0-8 16v24a20 20 0 0 0 8 16v20a12 12 0 0 0 24 0v-16h40v16a12 12 0 0 0 24 0v-20a20 20 0 0 0 8-16v-24a20 20 0 0 0-8-16v-12a20 20 0 0 1 20-20h12a20 20 0 0 0 16 8h24a20 20 0 0 0 16-8h20a12 12 0 0 0 0-24Zm-124 76v16H52v-16Zm-8-32v8H60v-8a84.09 84.09 0 0 1 84-84h8v40h-8a44.05 44.05 0 0 0-44 44Zm76-92h16v56h-16Z"
}));
var _default = exports.default = Pipe;