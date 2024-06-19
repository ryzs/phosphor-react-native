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
const Farm = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "farm-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M223.85 216H24v-96a257 257 0 0 1 56.2 6.21l-.2-.07V80l64-48 64 48v41.11a254.67 254.67 0 0 0-40 7V96h-48v42.61A256.79 256.79 0 0 1 223.85 216Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 160a8 8 0 0 0 0-16 232.2 232.2 0 0 0-65.8 9.47q-9-5.78-18.46-10.78A246.3 246.3 0 0 1 232 128a8 8 0 0 0 0-16c-5.36 0-10.69.18-16 .49V80a8 8 0 0 0-3.2-6.4l-64-48a8 8 0 0 0-9.6 0l-64 48A8 8 0 0 0 72 80v36.37A266.33 266.33 0 0 0 24 112a8 8 0 0 0 0 16 247 247 0 0 1 193.61 93 8 8 0 1 0 12.48-10q-7.59-9.5-15.94-18.14c5.92-.57 11.89-.86 17.85-.86a8 8 0 0 0 0-16 201.53 201.53 0 0 0-32.59 2.65q-7.75-6.92-16-13.16A216.51 216.51 0 0 1 232 160Zm-104-26.76V104h32v17.94a262.48 262.48 0 0 0-31.93 11.33ZM88 84l56-42 56 42v29.93q-12.12 1.45-24 4V96a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v31q-11.79-4.15-24-7.18Zm48.83 136.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16 199.11 199.11 0 0 1 110.6 33.34 8 8 0 0 1 2.23 11.09Zm49.54-10.14a8 8 0 1 1-11.2 11.42A214.81 214.81 0 0 0 24 160a8 8 0 0 1 0-16 230.69 230.69 0 0 1 162.37 66.29Z"
}));
var _default = exports.default = Farm;