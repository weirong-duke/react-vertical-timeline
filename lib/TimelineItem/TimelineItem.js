'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTimelineMomentStyles = function getTimelineMomentStyles(itemOptions) {
    var options = itemOptions || {};
    return {
        color: options.momentColor || 'black',
        width: '120px',
        textAlign: 'right',
        position: 'relative',
        float: 'right',
        right: '540px',
        display: 'inline',
        lineHeight: '1em',
        fontSize: '1em',
        verticalAlign: 'middle',
        top: '6px'
    };
};

var getTimelineDetailTitleStyles = function getTimelineDetailTitleStyles(itemOptions) {
    var options = itemOptions || {};
    return {
        color: options.titleColor || 'black',
        position: 'relative',
        display: 'inline',
        borderRadius: '5px',
        fontWeight: '600',
        textAlign: 'left'
    };
};

var getTimelineCircleStyles = function getTimelineCircleStyles(itemOptions) {
    var options = itemOptions || {};
    var circleLeft = void 0,
        circleBorderWidth = void 0;
    switch (options.circleThickness) {
        case 'thin':
            circleLeft = '-37px';
            circleBorderWidth = '1px';
            break;
        case 'thick':
            circleLeft = '-40px';
            circleBorderWidth = '4px';
            break;
        default:
            circleLeft = '-38px';
            circleBorderWidth = '2px';
    }
    return {
        color: options.circleColor || 'black',
        left: circleLeft,
        borderWidth: circleBorderWidth,
        background: options.circleFill ? options.circleColor || 'black' : '#fff',

        position: 'absolute',
        top: '50%',
        display: 'block',
        width: '12px',
        height: '12px',
        marginTop: '-8px',
        borderRadius: '10px',
        borderStyle: 'solid',
        zIndex: '10'
    };
};

var getTimelineDetailStyles = function getTimelineDetailStyles() {
    //constants FOR NOW
    return {
        left: '180px',
        position: 'relative',
        width: '540px',
        float: 'left'
    };
};

var timePaddingStyles = {
    content: "",
    display: 'block',
    height: '0',
    clear: 'both',
    visibility: 'hidden'
};

var getTimelineDescriptionStyles = function getTimelineDescriptionStyles(itemOptions) {
    var options = itemOptions || {};
    return {
        color: options.descriptionColor || 'gray',
        fontSize: '0.65em',
        fontStyle: 'italic',
        lineHeight: '1.5em'
    };
};

var TimelineItem = function TimelineItem(_ref) {
    var displayTime = _ref.displayTime,
        title = _ref.title,
        description = _ref.description,
        itemOptions = _ref.itemOptions;

    var styleOptions = itemOptions || {};
    return _react2.default.createElement(
        'li',
        { style: { padding: '1em 0' } },
        _react2.default.createElement(
            'span',
            { style: getTimelineMomentStyles(itemOptions) },
            displayTime
        ),
        _react2.default.createElement(
            'span',
            { style: getTimelineDetailStyles() },
            _react2.default.createElement(
                'span',
                { style: getTimelineDetailTitleStyles(itemOptions) },
                _react2.default.createElement('div', { style: getTimelineCircleStyles(itemOptions) }),
                title
            ),
            _react2.default.createElement(
                'div',
                { style: getTimelineDescriptionStyles(itemOptions) },
                description
            )
        ),
        _react2.default.createElement('div', { style: timePaddingStyles })
    );
};

exports.default = TimelineItem;