#This gets compiled by babel into ES5 in the /lib/ folder

EXPORT_FILE='react-vertical-timeline.js'

echo import Timeline from \'./components/Timeline/\'\; >> $EXPORT_FILE
echo export default Timeline\; >> $EXPORT_FILE
