import React, { useEffect, useRef } from "react";

interface TimelineProps {
    children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({children}) => {

    return (
        <div className="timeline">
            {React.Children.map(children, (child, index) => (
                
                <React.Fragment key={index}>
                    {child}
                    {index < React.Children.count(children) - 1 && <div className="timeline-line"/>}
                </React.Fragment>
            ))}
        </div>
    )
}
export default Timeline;