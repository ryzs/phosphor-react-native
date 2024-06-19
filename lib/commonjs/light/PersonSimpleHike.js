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
  className: "person-simple-hike-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 78a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm46 114v88a6 6 0 0 1-12 0v-82.19c-26.23-1.73-34.76-14.89-42.35-26.59-3.43-5.3-6.68-10.31-11.5-14.52L117 143.61l38.52 27.51A6 6 0 0 1 158 176v56a6 6 0 0 1-12 0v-52.91l-33.92-24.23-34.58 79.53a6 6 0 0 1-11-4.78L124 97.29a6 6 0 0 1 8.25-2.94 38.89 38.89 0 0 1 7.65 5.21c6.15 5.34 10 11.33 13.79 17.13C161.44 128.59 167.54 138 192 138a6 6 0 0 1 6 6Zm-126 6a6 6 0 0 0 5.52-3.64l24-56a6 6 0 0 0-3.16-7.88l-28-12a6 6 0 0 0-7.87 3.16l-24 56a6 6 0 0 0 3.15 7.87l28 12A6 6 0 0 0 72 150Zm-20.12-21.15 19.27-45 17 7.27-19.27 45Z"
}));
var _default = exports.default = PersonSimpleHike;