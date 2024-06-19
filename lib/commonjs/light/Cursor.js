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
const Cursor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cursor-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M166.59 134.1a1.91 1.91 0 0 1-.55-1.79 2 2 0 0 1 1.08-1.42l46.25-17.76.24-.1A14 14 0 0 0 212.38 87L52.29 34.7A13.95 13.95 0 0 0 34.7 52.29L87 212.38a13.82 13.82 0 0 0 12.6 9.6h.69a13.84 13.84 0 0 0 12.71-8.37 2.44 2.44 0 0 0 .1-.24l17.76-46.25a2 2 0 0 1 3.21-.53l51.31 51.31a14 14 0 0 0 19.8 0l12.69-12.69a14 14 0 0 0 0-19.8Zm42.82 62.63-12.68 12.68a2 2 0 0 1-2.83 0l-51.31-51.31a14 14 0 0 0-22.74 4.32 2.44 2.44 0 0 0-.1.24L102 208.91a2 2 0 0 1-3.61-.26L46.11 48.57a1.87 1.87 0 0 1 .47-2 1.92 1.92 0 0 1 1.35-.57 2.22 2.22 0 0 1 .64.1l160.08 52.28a2 2 0 0 1 .26 3.61l-46.25 17.76-.24.1a14 14 0 0 0-4.32 22.74l51.31 51.31a2 2 0 0 1 0 2.83Z"
}));
var _default = exports.default = Cursor;