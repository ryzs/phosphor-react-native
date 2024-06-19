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
const Visor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "visor-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M183.05 60H72a68 68 0 0 0-67.93 71.21c1.6 34.66 30 63.08 64.65 64.71 14.77.72 30-5.64 46.63-19.38a19.9 19.9 0 0 1 25.35 0C150.79 184.92 166.25 196 184 196a68 68 0 0 0 68-68.9c-.49-37-31.42-67.1-68.95-67.1Zm43.65 110.15A59.57 59.57 0 0 1 184 188c-15.17 0-29.07-10-38.2-17.58a27.88 27.88 0 0 0-35.55 0c-15 12.41-28.45 18.14-41.15 17.55a60.37 60.37 0 0 1-57-57.09A60 60 0 0 1 72 68h111.05c33.18 0 60.52 26.56 60.94 59.2a59.59 59.59 0 0 1-17.29 42.95ZM180 96a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = Visor;