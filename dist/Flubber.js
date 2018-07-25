'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _motorcortex = require('@kissmybutton/motorcortex');

var _motorcortex2 = _interopRequireDefault(_motorcortex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var flubber = require('flubber');

var Flubber = function (_MotorCortex$TimedInc) {
    _inherits(Flubber, _MotorCortex$TimedInc);

    function Flubber() {
        _classCallCheck(this, Flubber);

        return _possibleConstructorReturn(this, (Flubber.__proto__ || Object.getPrototypeOf(Flubber)).apply(this, arguments));
    }

    _createClass(Flubber, [{
        key: 'onGetContext',
        value: function onGetContext() {
            this.interpolator = flubber.interpolate(this.getInitialValue('d'), this.animAttributes.d);
        }
    }, {
        key: 'getScratchValue',
        value: function getScratchValue(id, attr) {
            // console.log(this.element.getAttribute('d'));
            return this.element.getAttribute('d');
        }
    }, {
        key: 'onProgress',
        value: function onProgress(t) {
            this.element.setAttribute("d", this.interpolator(t));
        }
    }]);

    return Flubber;
}(_motorcortex2.default.TimedIncident);

exports.default = Flubber;
//# sourceMappingURL=Flubber.js.map