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
  className: "person-simple-hike-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 48a24 24 0 1 1-24-24 24 24 0 0 1 24 24ZM44 132l28 12 24-56-28-12Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 80a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm48 112v88a8 8 0 0 1-16 0v-80.34c-25.75-2.25-34.35-15.52-42-27.36-2.85-4.39-5.56-8.57-9.13-12.19l-13.4 30.81 37.2 26.57A8 8 0 0 1 160 176v56a8 8 0 0 1-16 0v-51.88l-31.07-22.2-33.59 77.27A8 8 0 0 1 72 240a7.84 7.84 0 0 1-3.19-.67 8 8 0 0 1-4.15-10.52L122.19 96.5a8 8 0 0 1 11-3.92 40.92 40.92 0 0 1 8 5.47c6.37 5.52 10.51 11.91 14.16 17.55 7.68 11.84 13.23 20.4 36.6 20.4a8 8 0 0 1 8.05 8Zm-128 8a8 8 0 0 0 7.36-4.85l24-56a8 8 0 0 0-4.2-10.5l-28-12a8 8 0 0 0-10.5 4.2l-24 56a8 8 0 0 0 4.2 10.5l28 12A8 8 0 0 0 72 152Zm-17.49-24.2L72.2 86.5l13.3 5.7-17.7 41.29Z"
}));
var _default = exports.default = PersonSimpleHike;