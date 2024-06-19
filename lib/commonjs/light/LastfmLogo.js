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
const LastfmLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lastfm-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M246 160a38 38 0 0 1-38 38h-17.43a54.21 54.21 0 0 1-48.94-31.16l-30.14-64.6A42.14 42.14 0 0 0 73.43 78H64a42 42 0 0 0-42 42v24a42 42 0 0 0 42 42h8a34 34 0 0 0 31.17-20.4 6 6 0 0 1 11 4.8A46 46 0 0 1 72 198h-8a54.06 54.06 0 0 1-54-54v-24a54.06 54.06 0 0 1 54-54h9.43a54.21 54.21 0 0 1 48.94 31.16l30.14 64.6A42.14 42.14 0 0 0 190.57 186H208a26 26 0 0 0 0-52h-20a34 34 0 0 1 0-68h20a30 30 0 0 1 30 30 6 6 0 0 1-12 0 18 18 0 0 0-18-18h-20a22 22 0 0 0 0 44h20a38 38 0 0 1 38 38Z"
}));
var _default = exports.default = LastfmLogo;