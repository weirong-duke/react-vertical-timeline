#This gets compiled by babel into ES5 in the /lib/ folder

EXPORT_FILE='react-vertical-timeline.js'

echo import Timeline from \'./src/components/Timeline/\'\; >> $EXPORT_FILE
echo export default Timeline\; >> $EXPORT_FILE

# > $EXPORT_FILE
#
# for dir in $EXPORT_DIRECTORY
# do
#     dir=${dir%*/}
#     echo import _${dir##*/} from \'./exports/${dir##*/}\'\; >> $EXPORT_FILE
#     echo export \{ _${dir##*/}\ as ${dir##*/} \}\; >> $EXPORT_FILE
# done
