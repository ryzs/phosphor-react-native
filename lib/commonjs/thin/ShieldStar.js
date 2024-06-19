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
const ShieldStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shield-star-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M171.71 118.51a4 4 0 0 1-2.22 5.2l-35.16 14.07 20.87 27.82a4 4 0 1 1-6.4 4.8L128 142.67l-20.8 27.73a4 4 0 0 1-6.4-4.8l20.87-27.82-35.16-14.07a4 4 0 1 1 3-7.42l34.49 13.8V96a4 4 0 0 1 8 0v34.09l34.51-13.8a4 4 0 0 1 5.2 2.22ZM220 56v56c0 51.16-24.73 82.12-45.47 99.1-22.4 18.32-44.55 24.5-45.48 24.76a4 4 0 0 1-2.1 0c-.93-.26-23.08-6.44-45.48-24.76C60.73 194.12 36 163.16 36 112V56a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v56c0 38.44 14.23 69.63 42.29 92.71A132.23 132.23 0 0 0 128 227.82a132.45 132.45 0 0 0 41.71-23.11C197.77 181.63 212 150.44 212 112Z"
}));
var _default = exports.default = ShieldStar;