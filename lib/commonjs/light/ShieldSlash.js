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
const ShieldSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shield-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-9.63 7A14 14 0 0 0 34 56v56c0 51.94 25.12 83.4 46.2 100.64 22.73 18.6 45.27 24.89 46.22 25.15a6 6 0 0 0 3.16 0c1.36-.37 31.91-8.95 57.67-35.7L203.56 220a6 6 0 0 0 8.88-8.08ZM128 225.72a130.83 130.83 0 0 1-40.56-22.66C59.94 180.39 46 149.75 46 112V56a2 2 0 0 1 2-2h4.6l126.56 139.19A130.68 130.68 0 0 1 128 225.72ZM222 56v56c0 20.29-3.83 39.05-11.38 55.77a6 6 0 0 1-5.47 3.53 5.86 5.86 0 0 1-2.47-.54 6 6 0 0 1-3-7.93C206.53 147.67 210 130.57 210 112V56a2 2 0 0 0-2-2H98.52a6 6 0 1 1 0-12H208a14 14 0 0 1 14 14Z"
}));
var _default = exports.default = ShieldSlash;