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
const Bomb = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bomb-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 34a6 6 0 0 0-6 6 54.1 54.1 0 0 1-3.57 17.77C234.06 68.69 226.72 74 216 74c-12.91 0-21.76-12.38-31.12-25.49C174.67 34.21 163.09 18 144 18c-15.74 0-27.35 8.22-33.57 23.77a65.36 65.36 0 0 0-4 16.23H88a14 14 0 0 0-14 14v10.83A86 86 0 0 0 112 246h1.55A86 86 0 0 0 150 82.83V72a14 14 0 0 0-14-14h-17.47a51.39 51.39 0 0 1 3.15-12c4.38-10.74 11.69-16 22.32-16 12.91 0 21.75 12.38 31.12 25.49C185.33 69.79 196.91 86 216 86c15.74 0 27.35-8.22 33.57-23.77A66.46 66.46 0 0 0 254 40a6 6 0 0 0-6-6ZM138 72v14.66a6 6 0 0 0 3.6 5.49 74 74 0 1 1-59.2 0 6 6 0 0 0 3.6-5.49V72a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-33 130.08a6 6 0 0 1-1 11.92 6.74 6.74 0 0 1-1-.08A55.48 55.48 0 0 1 58.08 169a6 6 0 1 1 11.84-2A43.29 43.29 0 0 0 105 202.08Z"
}));
var _default = exports.default = Bomb;