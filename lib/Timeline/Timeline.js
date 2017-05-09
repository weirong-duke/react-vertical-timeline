'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TimelineItem = require('../TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
timelineOptions///
{

    lineColor
    lineThickness

    defaultItemOptions: {
        circleColor

        timeColor

        titleColor
        descriptionColor
        font
    }

}

*/
var Timeline = function (_React$Component) {
    _inherits(Timeline, _React$Component);

    function Timeline() {
        _classCallCheck(this, Timeline);

        return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    _createClass(Timeline, [{
        key: 'getTimelineStyle',
        value: function getTimelineStyle() {
            var _ref;

            var options = this.props.options || {};
            return _ref = {
                fontFamily: '\'' + (options.font || 'Open Sans') + '\', sans-serif',
                margin: 0,
                padding: 0,
                fontSize: '112.5%',
                lineHeight: '1.6em',
                position: 'relative',
                width: '660px'
            }, _defineProperty(_ref, 'margin', '20px auto 0'), _defineProperty(_ref, 'padding', '1em 0'), _defineProperty(_ref, 'listStyleType', 'none'), _ref;
        }
    }, {
        key: 'getTimelineLineStyle',
        value: function getTimelineLineStyle() {
            var options = this.props.options || {};
            var lineWidth = void 0,
                lineMargin = void 0;
            switch (options.lineThickness) {
                case 'thin':
                    lineWidth = '2px';
                    lineMargin = '-1px';
                    break;
                case 'thick':
                    lineWidth = '6px';
                    lineMargin = '-3px';
                    break;
                default:
                    lineWidth = '4px';
                    lineMargin = '-2px';
            }
            return {
                width: lineWidth,
                marginLeft: lineMargin,
                background: options.lineColor || 'black',
                left: '150px',
                position: 'absolute',
                display: 'block',
                height: '100%',
                zIndex: 5
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                options = _props.options,
                items = _props.items;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { style: this.getTimelineStyle() },
                    _react2.default.createElement('div', { style: this.getTimelineLineStyle() }),
                    items.map(function (timelineItem, index) {
                        return _react2.default.createElement(_TimelineItem2.default, _extends({ key: index, itemOptions: options.defaultItemOptions }, timelineItem));
                    })
                )
            );
        }
    }]);

    return Timeline;
}(_react2.default.Component);

exports.default = Timeline;