import React from 'react';
import TimelineItem from '../TimelineItem';

class Timeline extends React.Component {
    getTimelineStyle() {
        const options = this.props.options || {};
        return {
            fontFamily: `'${options.font || 'Open Sans'}', sans-serif`,
            margin: 0,
            padding: 0,
            fontSize: '112.5%',
            lineHeight: '1.6em',
            position: 'relative',
            width: '660px',
            margin: '20px auto 0',
            padding: '1em 0',
            listStyleType: 'none',
        }
    }
    getTimelineLineStyle() {
        const options = this.props.options || {};
        let lineWidth, lineMargin;
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
        }
    }
	render() {
        const {options, items} = this.props;
		return (
			<div>
				<ul style={this.getTimelineStyle()}>
                    <div style={this.getTimelineLineStyle()} />

                    {
                        items.map((timelineItem, index) => <TimelineItem key={index} itemOptions={options.defaultItemOptions} {...timelineItem}  /> )
                    }

				</ul>
			</div>
		)
	}
}

export default Timeline;
