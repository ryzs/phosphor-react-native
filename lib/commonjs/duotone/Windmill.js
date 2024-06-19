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
const Windmill = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "windmill-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 232H80l10.27-71.89 17.63-30 58.46 34.41Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 224h-41.06l-6.3-44.12 3.24 1.91a16 16 0 0 0 21.91-5.67l12-20.34a16 16 0 0 0-5.67-21.91l-35-20.61 40.69-69.13a16 16 0 0 0-5.67-21.91l-20.34-12a16 16 0 0 0-21.91 5.67l-20.61 35-69.16-40.67a16 16 0 0 0-21.91 5.67l-12 20.33a16 16 0 0 0 5.67 21.92l35 20.61-40.67 69.13a16 16 0 0 0 5.67 21.91l20.34 12a15.57 15.57 0 0 0 10.58 2L73.06 224H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16Zm-24-76.34L188 168l-69.13-40.69 12-20.35ZM179.66 24 200 36l-40.69 69.14L139 93.17ZM56 44.35 68 24l69.14 40.7-12 20.35ZM76.34 168 56 156l40.69-69.14 20.36 12Zm12.88 56L98 162.8l12.77-21.7L159 169.5l7.79 54.5Z"
}));
var _default = exports.default = Windmill;