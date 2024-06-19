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
const NuclearPlant = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "nuclear-plant-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 34h24a10 10 0 0 0 10-10 6 6 0 0 1 12 0 22 22 0 0 1-22 22h-24a10 10 0 0 0-10 10 6 6 0 0 1-12 0 22 22 0 0 1 22-22Zm-48 28a6 6 0 0 0 6-6 42 42 0 0 1 42-42h8a6 6 0 0 0 0-12h-8a54.06 54.06 0 0 0-54 54 6 6 0 0 0 6 6Zm142 154a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h18c14-28 30.2-69.68 31.88-114.59A13.92 13.92 0 0 1 79.85 82h88.33a14 14 0 0 1 14 13.37c2.14 49.08 24.74 94.63 36.1 114.63H240a6 6 0 0 1 6 6ZM168.18 94H150c.06.46.1.94.12 1.41C151.82 140.32 168 182 182 210h22.55c-12.44-23.1-32.32-66.9-34.4-114.11a2 2 0 0 0-1.97-1.89ZM47.34 210h121.32c-13.86-28.94-28.86-69.92-30.51-114.14a2 2 0 0 0-2-1.86h-56.3a2 2 0 0 0-2 1.86C76.2 140.08 61.2 181.06 47.34 210Z"
}));
var _default = exports.default = NuclearPlant;