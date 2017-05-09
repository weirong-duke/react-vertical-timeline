import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './components/Timeline';

const items = [
	{
		displayTime: 'Feb 09',
		title: 'We added new data for your Facebook account',
		description: '11 new items'
	}, {
		displayTime: 'Feb 02',
		title: 'We found new information on you in our master database'
	}, {
		displayTime: 'Jan 28',
		title: 'All your base are belong to us',
		description: 'I, for one, welcome our new robotic overlords.'
	}, {
		displayTime: 'Jan 17',
		title: 'Aliens attack',
		description: 'I mean, haven\'t you seen Mars Attacks?'
	}
];

const timelineOptions = {
	lineThickness: 'thin',
	defaultItemOptions: {
		momentColor: 'blue'
	}
};

class Main extends React.Component {
	render() {
		return (
			<div>
				<Timeline items={items} options={timelineOptions} />
			</div>
		);
	}
}

ReactDOM.render(
	<Main />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
