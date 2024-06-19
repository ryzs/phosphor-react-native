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
  className: "windmill-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 226h-42.8l-7.13-49.95 6.82 4a14 14 0 0 0 19.18-4.95l12-20.34a14 14 0 0 0-5-19.18L170.36 114l41.7-70.86a14 14 0 0 0-5-19.17L186.77 12a14 14 0 0 0-19.18 5L146 53.65 75.11 11.94a14 14 0 0 0-19.18 5l-12 20.34a14 14 0 0 0 5 19.17L85.64 78l-41.7 70.85a14 14 0 0 0 5 19.18l20.33 12a13.92 13.92 0 0 0 7.05 1.97 13.74 13.74 0 0 0 3.53-.46c.46-.12.91-.26 1.36-.42L74.8 226H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12Zm-22.06-78.84a2 2 0 0 1-.22 1.51l-12 20.34a2 2 0 0 1-2.75.71L116.12 128l14-23.8L201 145.93a2 2 0 0 1 .94 1.23ZM177.93 23a2 2 0 0 1 1.23-.92 2 2 0 0 1 1.51.21l20.34 12a2 2 0 0 1 .71 2.76L160 107.88l-23.81-14ZM54.06 44.85a2 2 0 0 1 .22-1.52L66.27 23a2 2 0 0 1 2.73-.72L139.88 64l-14 23.8L55 46.07a2 2 0 0 1-.94-1.22ZM78.07 169a2 2 0 0 1-2.74.71L55 157.73a2 2 0 0 1-.71-2.75L96 84.12l23.81 14Zm18-6.88 14-23.77 50.8 29.9 8.21 57.75H86.92Z"
}));
var _default = exports.default = Windmill;