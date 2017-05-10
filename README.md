# react-vertical-timeline

A declarative timeline component for React. End goal is to have a fully customizable and responsive timeline component.

CSS for base timeline inspired and edited from http://codepen.io/NilsWe/pen/FemfK/

#### Table of contents
* [Installation](#installation)
* [Usage](#usage)

#### Installation

```
$ npm install git@github.com:weirong-duke/react-vertical-timeline.git
```

#### Build
```
npm run build
```
This will use babel to transpile the components and puts the results in the lib folder.

#### Usage

```javascript
import VerticalTimeline from 'react-vertical-timeline'

...
const timelineOptions = {
    lineColor: {any},
    lineThickness: {[thin, thick, default]},
    defaultItemOptions: {
        circleColor: {any},
        circleFill: {bool},
        circleThickness: {[thin, thick, default]},
        timeColor: {any},
        titleColor: {any},
        descriptionColor: {any},
        font: {any}
    }
}

const items = [{
    displayTime: {string},
    title: {string},
    description: {string},
    itemOptions: {
        //these are overrides for any items that need different styling from the default item options
        circleColor: {any},
        circleFill: {bool},
        circleColor,
        timeColor,
        titleColor,
        descriptionColor,
        font
    }
}]

<VerticalTimeline items={items} options={timelineOptions}/>
```

#### Upcoming
* Responsive size
* Custom field location and timeline location
* Horizontal option
