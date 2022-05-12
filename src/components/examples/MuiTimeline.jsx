import {
    Timeline, 
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} 
from "@mui/lab"

export const MuiTimeline = () => {
    return(
        <Timeline position="right">
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">9:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outline" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City A
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">10:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outline" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City B
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">11:30 am</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outline" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    City C
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}