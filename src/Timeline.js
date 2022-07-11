import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Heading, Stack} from "@chakra-ui/react";

export default function Timeline () {
    return (
        <>
        
        <Stack p={10} direction={{ base: 'column', md: 'column' }} spacing={4}>
        <Heading
            margin={0}
            pl={10}
            fontWeight={500}
            fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}
            lineHeight={'100%'}>
            experience
        </Heading>
<VerticalTimeline layout={"1-column"} lineColor={"gray"}>
        <VerticalTimelineElement
            
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
            User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
        
        </VerticalTimeline>
        
        </Stack>
       
        </>
    );
}


