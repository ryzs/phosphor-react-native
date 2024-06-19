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
const HardHat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hard-hat-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 156h-4v-20a92.35 92.35 0 0 0-64-87.65V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v8.35A92.35 92.35 0 0 0 36 136v20h-4a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12Zm-12-20v20h-56V56.8a84.33 84.33 0 0 1 56 79.2ZM112 36h32a4 4 0 0 1 4 4v116h-40V40a4 4 0 0 1 4-4ZM44 136a84.33 84.33 0 0 1 56-79.2V156H44Zm184 56a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = HardHat;