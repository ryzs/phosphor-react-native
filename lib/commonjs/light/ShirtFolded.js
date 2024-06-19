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
const ShirtFolded = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shirt-folded-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 42h-21.52l-14.23-14.24A6 6 0 0 0 160 26H96a6 6 0 0 0-4.25 1.76L77.52 42H56a14 14 0 0 0-14 14v152a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm-72 27.18L107.21 38h41.58Zm32.93-27.76 9.07 9.07V104a2 2 0 0 1-3.25 1.56l-30.82-26.64ZM86 50.49l9.07-9.07 25 37.5-30.82 26.62A2 2 0 0 1 86 104ZM54 208V56a2 2 0 0 1 2-2h18v50a13.87 13.87 0 0 0 8.06 12.68A14.11 14.11 0 0 0 88 118a13.87 13.87 0 0 0 9-3.26l.08-.07 25-21.56V210H56a2 2 0 0 1-2-2Zm148 0a2 2 0 0 1-2 2h-66V93.11l25 21.56.08.07A13.87 13.87 0 0 0 168 118a14.08 14.08 0 0 0 6-1.35 13.87 13.87 0 0 0 8-12.65V54h18a2 2 0 0 1 2 2Z"
}));
var _default = exports.default = ShirtFolded;