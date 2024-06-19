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
const Cow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cow-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M102 192a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6Zm74-6h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12Zm-76-72a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm56 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm86.85 6.85A14 14 0 0 1 232 126h-34v35.05A38 38 0 0 1 176 230H80a38 38 0 0 1-22-68.95V126H24a14 14 0 0 1-10.87-5.15 13.82 13.82 0 0 1-2.88-11.5A54.12 54.12 0 0 1 63.22 66h6.89A53.93 53.93 0 0 1 50 24a6 6 0 0 1 12 0 42 42 0 0 0 42 42h48a42 42 0 0 0 42-42 6 6 0 0 1 12 0 53.93 53.93 0 0 1-20.11 42h6.89a54.12 54.12 0 0 1 52.95 43.35 13.82 13.82 0 0 1-2.88 11.5ZM58 114v-10a37.87 37.87 0 0 1 10.32-26h-5.1A42.08 42.08 0 0 0 22 111.7a1.83 1.83 0 0 0 .4 1.55 2 2 0 0 0 1.6.75Zm144 78a26 26 0 0 0-26-26H80a26 26 0 0 0 0 52h96a26 26 0 0 0 26-26Zm-16-36.66V104a26 26 0 0 0-26-26H96a26 26 0 0 0-26 26v51.34A37.94 37.94 0 0 1 80 154h96a37.94 37.94 0 0 1 10 1.34Zm48-43.64A42.08 42.08 0 0 0 192.78 78h-5.1A37.87 37.87 0 0 1 198 104v10h34a2 2 0 0 0 1.58-.75 1.83 1.83 0 0 0 .42-1.55Z"
}));
var _default = exports.default = Cow;