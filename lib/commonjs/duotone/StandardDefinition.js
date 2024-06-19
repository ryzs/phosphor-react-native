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
const StandardDefinition = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "standard-definition-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 48v160H32V48Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h20a56 56 0 0 0 0-112Zm60 56a40 40 0 0 1-40 40h-12V88h12a40 40 0 0 1 40 40ZM24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8Zm208 160a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8Zm-128-56c0-9.48-8.61-13-26.88-18.26-15.75-4.54-35.34-10.19-35.34-29.74 0-18.24 16.43-32 38.22-32 15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C97.64 91.94 89.65 88 80 88c-12.67 0-22.22 6.88-22.22 16 0 7 9 10.1 23.77 14.36C97.78 123 120 129.45 120 152c0 17.64-17.94 32-40 32s-40-14.36-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16Z"
}));
var _default = exports.default = StandardDefinition;