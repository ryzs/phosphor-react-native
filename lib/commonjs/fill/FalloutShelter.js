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
const FalloutShelter = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fallout-shelter-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M231.94 124.55c-1.77-54.49-46-98.72-100.49-100.49A104.09 104.09 0 0 0 24.06 131.45c1.77 54.49 46 98.72 100.49 100.49a104.09 104.09 0 0 0 107.39-107.39Zm-33.56 16.92-23.45 32.83a8.52 8.52 0 0 1-13.86 0L128 128l-33.07 46.3a8.52 8.52 0 0 1-13.86 0l-23.45-32.83A8.52 8.52 0 0 1 64.55 128H128L97.62 85.47A8.52 8.52 0 0 1 104.55 72h46.9a8.52 8.52 0 0 1 6.93 13.47L128 128h63.45a8.52 8.52 0 0 1 6.93 13.47Z"
}));
var _default = exports.default = FalloutShelter;