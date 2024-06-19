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
const PersonSimpleHike = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-hike-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 76a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm44 116v88a4 4 0 0 1-8 0v-84.08c-26.68-1.13-34.8-13.66-42.67-25.79-3.53-5.46-6.87-10.61-12-15-.66-.56-1.33-1.1-2-1.6l-16.83 38.76 39.83 28.45A4 4 0 0 1 156 176v56a4 4 0 0 1-8 0v-53.94l-36.77-26.26-35.56 81.79A4 4 0 0 1 72 236a4.08 4.08 0 0 1-1.59-.33 4 4 0 0 1-2.08-5.27l57.53-132.31a4 4 0 0 1 5.5-2 37.24 37.24 0 0 1 7.26 4.94c5.94 5.15 9.74 11 13.42 16.71C159.77 129.7 166.45 140 192 140a4 4 0 0 1 4 4Zm-124 4a4 4 0 0 0 3.68-2.43l24-56a4 4 0 0 0-2.1-5.25l-28-12a4 4 0 0 0-5.26 2.1l-24 56a4 4 0 0 0 2.11 5.26l28 12A3.94 3.94 0 0 0 72 148Zm-22.75-18.1L70.1 81.25l20.65 8.85-20.85 48.65Z"
}));
var _default = exports.default = PersonSimpleHike;