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
const Cheers = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cheers-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m214.45 215.87-19.58 5.25-11.37-42.44a38.06 38.06 0 0 0 21.2-44.52c-12.52-46.73-38.55-87.68-39.65-89.4a6 6 0 0 0-6.51-2.58l-24.36 6.09c.11-9.67-.15-15.84-.19-16.55a6 6 0 0 0-4.53-5.54l-32-8A6 6 0 0 0 91 20.76c-1.1 1.72-27.13 42.67-39.65 89.4a38.06 38.06 0 0 0 21.2 44.52l-11.42 42.44-19.58-5.25a6 6 0 1 0-3.1 11.59l48 12.87a6.4 6.4 0 0 0 1.55.2 6 6 0 0 0 1.55-11.8l-16.83-4.51 11.38-42.45a36.43 36.43 0 0 0 3.9.23 38.08 38.08 0 0 0 36.71-28.17v-.13c.28-1.15.55-2.29.81-3.44a262.13 262.13 0 0 0 5.73 27.57A38.06 38.06 0 0 0 168 182a36.58 36.58 0 0 0 3.9-.23l11.38 42.45-16.83 4.51a6 6 0 0 0 1.55 11.8 6.4 6.4 0 0 0 1.55-.2l48-12.87a6 6 0 1 0-3.1-11.59Zm-57.27-161C160.06 59.7 165.39 69 171.32 81l-37.25 9.3c-.55-11.07-.51-20.31-.37-26.33.05-1.1.1-2.19.14-3.25Zm-58.36-24 23.31 5.83c.07 4.25.11 11.32-.19 20.2-.07 1.18-.16 3.09-.23 5.62-.09 1.82-.19 3.7-.3 5.63l-37.6-9.4c6.27-12.86 11.99-22.82 15.01-27.86Zm14.29 95.89a26 26 0 0 1-50.22-13.52 295.44 295.44 0 0 1 15.75-43.4l41.86 10.47a317.77 317.77 0 0 1-7.39 46.47Zm29.77 23.94a279.09 279.09 0 0 1-8-48.25l41.68-10.42a297.86 297.86 0 0 1 16.56 45.21 26 26 0 1 1-50.23 13.46Zm43.75-108a6 6 0 0 1 2.69-8l16-8a6 6 0 1 1 5.36 10.74l-16 8a6 6 0 0 1-8.05-2.69ZM230 72a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6ZM34.63 21.32a6 6 0 0 1 8-2.69l16 8a6 6 0 0 1-5.36 10.74l-16-8a6 6 0 0 1-2.64-8.05ZM40 70H24a6 6 0 0 1 0-12h16a6 6 0 0 1 0 12Z"
}));
var _default = exports.default = Cheers;