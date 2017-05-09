import React from 'react';

const getTimelineMomentStyles = (itemOptions) => {
	const options = itemOptions || {};
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

const getTimelineDetailTitleStyles = (itemOptions) => {
	const options = itemOptions || {};
	return {
		color: options.titleColor || 'black',
		position: 'relative',
		display: 'inline',
		borderRadius: '5px',
		fontWeight: '600',
		textAlign: 'left'
	};
};

const getTimelineCircleStyles = (itemOptions) => {
	const options = itemOptions || {};
	let circleLeft,
		circleBorderWidth;
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
		background: options.circleFill
			? (options.circleColor || 'black')
			: '#fff',

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

const getTimelineDetailStyles = () => {
	//constants FOR NOW
	return {left: '180px', position: 'relative', width: '540px', float: 'left'};
};

const timePaddingStyles = {
	content: '',
	display: 'block',
	height: '0',
	clear: 'both',
	visibility: 'hidden'
};

const getTimelineDescriptionStyles = (itemOptions) => {
	const options = itemOptions || {};
	return {
		color: options.descriptionColor || 'gray',
		fontSize: '0.65em',
		fontStyle: 'italic',
		lineHeight: '1.5em'
	};
};

const TimelineItem = ({displayTime, title, description, itemOptions}) => {
	return (
		<li style={{
			padding: '1em 0'
		}}>
			<span style={getTimelineMomentStyles(itemOptions)}>{displayTime}</span>

			<span style={getTimelineDetailStyles()}>
				<span style={getTimelineDetailTitleStyles(itemOptions)}>
					<div style={getTimelineCircleStyles(itemOptions)} /> {title}
				</span>

				<div style={getTimelineDescriptionStyles(itemOptions)}>{description}</div>

			</span>
			<div style={timePaddingStyles}></div>
		</li>
	);
};

export default TimelineItem;
