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
const CrownSimple = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crown-simple-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230 75.4a13.87 13.87 0 0 0-16.52 3.34l-35.74 38.52-37.03-83.13a14 14 0 0 0-25.45.07l-37 83.06-35.78-38.52a14 14 0 0 0-24.26 11.72c0 .08 0 .16.05.24L41 194.57A14 14 0 0 0 54.71 206h146.58a14 14 0 0 0 13.76-11.43L237.73 90.7c0-.08 0-.16.05-.24A13.89 13.89 0 0 0 230 75.4Zm-4 12.89-22.69 103.82a2 2 0 0 0-.05.24 2 2 0 0 1-2 1.65H54.71a2 2 0 0 1-2-1.65 2 2 0 0 0-.05-.24L30 88.29a1.82 1.82 0 0 1 1.12-2.06 1.84 1.84 0 0 1 2.36.48l.12.13 42 45.24a6 6 0 0 0 9.88-1.64l40.7-91.28A1.92 1.92 0 0 1 128 38a1.87 1.87 0 0 1 1.78 1.09l40.74 91.35a6 6 0 0 0 9.88 1.64l42-45.24.12-.13a1.84 1.84 0 0 1 2.36-.48 1.82 1.82 0 0 1 1.12 2.06Z"
}));
var _default = exports.default = CrownSimple;