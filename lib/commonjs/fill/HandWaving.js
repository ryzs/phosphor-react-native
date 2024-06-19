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
const HandWaving = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-waving-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.31 98.46a88 88 0 1 1-152.23 88.31l-40.93-70.89a16 16 0 0 1 27.69-16L72.4 132a8 8 0 0 0 13.86-8L47 56a16 16 0 0 1 27.69-16L114 108a8 8 0 1 0 13.85-8l-30-52a16 16 0 0 1 27.71-16L166 102.12A48.25 48.25 0 0 0 152 136a47.59 47.59 0 0 0 9.6 28.8 8 8 0 1 0 12.79-9.61 32 32 0 0 1 6.61-44.93 8 8 0 0 0 2.17-10.43L171.71 80a16 16 0 0 1 27.71-16l19.89 34.46Zm-29.37-57A43.74 43.74 0 0 1 216.74 62l.33.57a8 8 0 0 0 13.86-8l-.33-.57a59.64 59.64 0 0 0-36.54-28 8 8 0 0 0-4.12 15.46ZM79.58 225.72A103.58 103.58 0 0 1 53.93 196a8 8 0 0 0-13.86 8 119.56 119.56 0 0 0 29.6 34.28 8 8 0 0 0 9.91-12.56Z"
}));
var _default = exports.default = HandWaving;