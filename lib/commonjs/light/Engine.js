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
const Engine = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "engine-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 106h-13.51l-35.91-35.9a13.9 13.9 0 0 0-9.89-4.1H138V38h26a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12h26v28H64a14 14 0 0 0-14 14v54H22v-26a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-26h28v22.69a13.9 13.9 0 0 0 4.1 9.89l39.32 39.32a13.9 13.9 0 0 0 9.89 4.1h77.38a13.9 13.9 0 0 0 9.89-4.1l35.91-35.9H240a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14Zm2 62a2 2 0 0 1-2 2h-16a6 6 0 0 0-4.24 1.76l-37.66 37.66a2 2 0 0 1-1.41.58h-77.38a2 2 0 0 1-1.41-.58L62.58 170.1a2 2 0 0 1-.58-1.41V80a2 2 0 0 1 2-2h116.69a2 2 0 0 1 1.41.58l37.66 37.66A6 6 0 0 0 224 118h16a2 2 0 0 1 2 2Z"
}));
var _default = exports.default = Engine;