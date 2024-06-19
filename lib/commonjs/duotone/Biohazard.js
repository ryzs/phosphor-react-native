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
const Biohazard = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "biohazard-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 132a56 56 0 1 1-56-56 56 56 0 0 1 56 56Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M185.68 104.28q-1.4-2.88-3.06-5.6a60 60 0 0 0-26.92-78 8 8 0 0 0-7.4 14.19 44 44 0 0 1 22.42 49.53 63.85 63.85 0 0 0-85.46 0 44 44 0 0 1 22.44-49.53 8 8 0 1 0-7.4-14.19 60 60 0 0 0-26.93 78 62.59 62.59 0 0 0-3.05 5.58A60.07 60.07 0 0 0 16 164a8 8 0 0 0 16 0 44.09 44.09 0 0 1 32.89-42.58A63.94 63.94 0 0 0 109 193.11a44 44 0 0 1-56.65 8 8 8 0 1 0-8.62 13.47A60 60 0 0 0 126.74 196h2.52a60 60 0 0 0 83.05 18.59 8 8 0 1 0-8.62-13.47 44 44 0 0 1-56.65-8 63.94 63.94 0 0 0 44.07-71.69A44.09 44.09 0 0 1 224 164a8 8 0 0 0 16 0 60.07 60.07 0 0 0-54.32-59.72ZM128 84a47.91 47.91 0 0 1 35.56 15.79 44 44 0 0 1-71.13 0A47.89 47.89 0 0 1 128 84Zm.12 49.92-.12.2-.12-.2h.24ZM80 132a47.6 47.6 0 0 1 1.44-11.65 44 44 0 0 1 36 58.46A48.07 48.07 0 0 1 80 132Zm58.57 46.81a44 44 0 0 1 36-58.46 48 48 0 0 1-36 58.46Z"
}));
var _default = exports.default = Biohazard;