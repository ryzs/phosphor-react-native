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
const UserSound = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-sound-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M133.17 166.84a64 64 0 1 0-50.34 0c-23.76 5.46-45.18 18.69-61.89 38.59a4 4 0 1 0 6.12 5.14C48 185.7 76.71 172 108 172s60 13.7 80.94 38.57a4 4 0 0 0 6.12-5.14c-16.71-19.9-38.13-33.13-61.89-38.59ZM52 108a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Zm151.68-40.83a104.35 104.35 0 0 1 0 81.66 4 4 0 0 1-3.68 2.43 4.12 4.12 0 0 1-1.57-.32 4 4 0 0 1-2.11-5.25 96.32 96.32 0 0 0 0-75.38 4 4 0 0 1 7.36-3.14ZM244 108a135.2 135.2 0 0 1-11 53.58 4 4 0 0 1-3.68 2.42 3.94 3.94 0 0 1-1.57-.32 4 4 0 0 1-2.1-5.26 128.44 128.44 0 0 0 0-100.84 4 4 0 1 1 7.35-3.16A135.2 135.2 0 0 1 244 108Z"
}));
var _default = exports.default = UserSound;