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
const TeaBag = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tea-bag-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 162a18 18 0 0 1-18-18V64a54 54 0 0 0-108 0v10H76.53a14.07 14.07 0 0 0-12 6.8L44 115a14 14 0 0 0-2 7.21V216a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-93.78a14 14 0 0 0-2-7.21L143.48 80.8a14.07 14.07 0 0 0-12-6.8H110V64a42 42 0 0 1 84 0v80a30 30 0 0 0 30 30 6 6 0 0 0 0-12Zm-92.53-76a2 2 0 0 1 1.72 1l20.53 34.22a2 2 0 0 1 .28 1V216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-93.78a2 2 0 0 1 .29-1L74.81 87a2 2 0 0 1 1.72-1H98v50a6 6 0 0 0 12 0V86Z"
}));
var _default = exports.default = TeaBag;