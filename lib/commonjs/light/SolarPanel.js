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
const SolarPanel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "solar-panel-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M34 104a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6Zm38.84-46.67a6 6 0 1 0 8.49-8.48L70 37.53A6 6 0 0 0 61.53 46ZM128 38a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v16a6 6 0 0 0 6 6Zm50.91 21.09a6 6 0 0 0 4.25-1.76L194.47 46a6 6 0 0 0-8.47-8.47l-11.33 11.32a6 6 0 0 0 4.24 10.24ZM194 104a6 6 0 0 0 6 6h16a6 6 0 0 0 0-12h-16a6 6 0 0 0-6 6Zm-106 6a6 6 0 0 0 6-6 34 34 0 0 1 68 0 6 6 0 0 0 12 0 46 46 0 0 0-92 0 6 6 0 0 0 6 6Zm149.18 109a6 6 0 0 1-5.18 3H24a6 6 0 0 1-5.22-8.95l40.69-72A6 6 0 0 1 64.7 138h126.6a6 6 0 0 1 5.23 3.05l40.69 72a6 6 0 0 1-.04 5.95Zm-49.38-69h-28l4.35 20h35Zm-35.94 20-4.35-20h-39l-4.35 20Zm-50.33 12-6.09 28h65.12l-6.09-28Zm-44.64-12h35l4.35-20h-28Zm-22.61 40h48.88l6.09-28H50.11Zm187.44 0-15.83-28h-39.14l6.09 28Z"
}));
var _default = exports.default = SolarPanel;