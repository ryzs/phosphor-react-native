"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lib = require("../lib");
var _PintGlass = _interopRequireDefault(require("../bold/PintGlass"));
var _PintGlass2 = _interopRequireDefault(require("../duotone/PintGlass"));
var _PintGlass3 = _interopRequireDefault(require("../fill/PintGlass"));
var _PintGlass4 = _interopRequireDefault(require("../light/PintGlass"));
var _PintGlass5 = _interopRequireDefault(require("../regular/PintGlass"));
var _PintGlass6 = _interopRequireDefault(require("../thin/PintGlass"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* GENERATED FILE */

function PintGlass(_ref) {
  let {
    weight,
    color,
    size,
    style,
    mirrored
  } = _ref;
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false,
    style: contextStyle
  } = (0, _react.useContext)(_lib.IconContext);
  const IconComponent = (0, _react.useMemo)(() => {
    const iconWeight = weight ?? contextWeight;
    const weightMap = {
      bold: _PintGlass.default,
      duotone: _PintGlass2.default,
      fill: _PintGlass3.default,
      light: _PintGlass4.default,
      regular: _PintGlass5.default,
      thin: _PintGlass6.default
    };
    return weightMap[iconWeight];
  }, [weight, contextWeight]);
  const mirroredValue = mirrored ?? contextMirrored;
  return /*#__PURE__*/_react.default.createElement(IconComponent, {
    color: color ?? contextColor,
    size: size ?? contextSize,
    style: [contextStyle, style, {
      ...(mirroredValue && {
        transform: [{
          scaleX: -1
        }]
      })
    }]
  });
}
var _default = exports.default = PintGlass;