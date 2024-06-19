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
const ShieldStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shield-star-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M173.57 117.77a6 6 0 0 1-3.34 7.8l-32.73 13.09 19.3 25.74a6 6 0 0 1-9.6 7.2L128 146l-19.2 25.6a6 6 0 1 1-9.6-7.2l19.3-25.74-32.73-13.09a6 6 0 0 1 4.46-11.14L122 127.14V96a6 6 0 0 1 12 0v31.14l31.77-12.71a6 6 0 0 1 7.8 3.34ZM222 56v56c0 51.94-25.12 83.4-46.2 100.64-22.73 18.6-45.27 24.89-46.22 25.15a6 6 0 0 1-3.16 0c-1-.26-23.49-6.55-46.22-25.15C59.12 195.4 34 163.94 34 112V56a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v56c0 37.75 13.94 68.39 41.44 91.06A130.94 130.94 0 0 0 128 225.72a131.17 131.17 0 0 0 40.56-22.66C196.06 180.39 210 149.75 210 112Z"
}));
var _default = exports.default = ShieldStar;