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
const PersonSimpleSwim = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-swim-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 100a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm43.08 135.84a4 4 0 0 1-.53 5.63C203.56 205.9 188.9 212 173.93 212a54.84 54.84 0 0 1-6.12-.34c-15-1.65-28.6-9-41.72-16.14-25.52-13.86-49.62-27-83.54 1.18a4 4 0 0 1-5.1-6.16c17-14.12 33.62-20.07 50.74-18.19 15 1.65 28.6 9 41.72 16.14 25.52 13.86 49.62 26.94 83.54-1.18a4 4 0 0 1 5.63.53ZM40 84h24.24a91.4 91.4 0 0 1 48.37 13.73l-34.42 34.43c-13.63 1-27 7-40.74 18.38a4 4 0 0 0 5.1 6.16c33.92-28.13 58-15 83.54-1.18 13.12 7.12 26.69 14.49 41.72 16.14a54.84 54.84 0 0 0 6.12.34c15 0 29.63-6.1 44.62-18.53a4 4 0 1 0-5.1-6.16c-8.12 6.73-15.68 11.1-22.83 13.66L135 105.29A99.34 99.34 0 0 0 64.24 76H40a4 4 0 0 0 0 8Zm141.66 79.32c-18.77 3.07-35-5.71-51.75-14.83-12.83-7-26.09-14.15-40.73-16l30.16-30.16a94 94 0 0 1 9.95 8.63Z"
}));
var _default = exports.default = PersonSimpleSwim;