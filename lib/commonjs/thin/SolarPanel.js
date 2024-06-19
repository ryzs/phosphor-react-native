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
const SolarPanel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "solar-panel-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M36 104a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4Zm38.26-48.08a4 4 0 1 0 5.66-5.66L68.6 39a4 4 0 0 0-5.6 5.6ZM128 36a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4Zm50.91 21.09a4 4 0 0 0 2.83-1.17l11.31-11.32a4 4 0 1 0-5.65-5.6l-11.32 11.26a4 4 0 0 0 2.83 6.83ZM200 108h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8Zm-112 0a4 4 0 0 0 4-4 36 36 0 0 1 72 0 4 4 0 0 0 8 0 44 44 0 0 0-88 0 4 4 0 0 0 4 4Zm147.45 110a4 4 0 0 1-3.45 2H24a4 4 0 0 1-3.48-6l40.69-72a4 4 0 0 1 3.49-2h126.6a4 4 0 0 1 3.49 2l40.69 72a4 4 0 0 1-.03 4ZM189 148h-31.69l5.22 24h40Zm-34.63 24-5.22-24h-42.27l-5.22 24Zm-54.42 8-7 32H163l-7-32Zm-46.46-8h40l5.22-24H67Zm-22.6 40h53.89l7-32H48.94Zm194.28 0-18.08-32h-42.82l6.95 32Z"
}));
var _default = exports.default = SolarPanel;