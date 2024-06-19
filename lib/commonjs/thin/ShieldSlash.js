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
  className: "shield-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M51 37.31a4 4 0 0 0-6 5.38l1.31 1.44A12 12 0 0 0 36 56v56c0 51.16 24.73 82.12 45.47 99.1 22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c1.37-.37 32.56-9.14 58.23-36.71L205 218.69a4 4 0 1 0 5.92-5.38Zm77 190.51a132.23 132.23 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h5.5l128.38 141.21c-21.65 23.49-48.3 32.85-53.88 34.61ZM220 56v56c0 20-3.77 38.49-11.2 54.94a4 4 0 0 1-3.65 2.36 4.06 4.06 0 0 1-1.65-.36 4 4 0 0 1-2-5.29c7-15.41 10.49-32.79 10.49-51.65V56a4 4 0 0 0-4-4H98.52a4 4 0 1 1 0-8H208a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = ShieldSlash;