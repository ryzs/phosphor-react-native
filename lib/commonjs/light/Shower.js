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
const Shower = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shower-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M62 236a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm22-42a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm-64 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm32-32a10 10 0 1 0 10 10 10 10 0 0 0-10-10ZM254 40a6 6 0 0 1-6 6h-29.51l-28.9 28.89-21.76 127.43a14 14 0 0 1-23.71 7.57l-98-98a14 14 0 0 1 7.6-23.71l127.4-21.76 30.65-30.65A6 6 0 0 1 216 34h32a6 6 0 0 1 6 6Zm-77.34 39.34L55.7 100a2 2 0 0 0-1.11 3.39l98 98a2 2 0 0 0 3.39-1.09Z"
}));
var _default = exports.default = Shower;