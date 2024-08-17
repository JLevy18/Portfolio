import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface TimelineEvent {
    date: Date;
    icon: IconType;  // Accept a React Icons component
    description: string;
}

interface TimelineProps {
    startYear: number;
    events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ startYear, events }) => {
    const currentYear = new Date().getFullYear();
    const endYear = currentYear + 1;
    const totalYears = endYear - startYear;
    const years = Array.from({ length: totalYears + 1 }, (_, i) => startYear + i);
    const sortedEvents = events.sort((a, b) => a.date.getTime() - b.date.getTime());
    const PADDING = 0; // Padding percentage to adjust the event position

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);
    const [activeEventIndex, setActiveEventIndex] = useState(0);


    const calculateEventPosition = (eventDate: Date) => {
        const eventYear = eventDate.getFullYear();
        const yearIndex = eventYear - startYear;
        const yearPosition = (100 / totalYears) * yearIndex;

        // Calculate the month position within the year
        const monthPosition = (eventDate.getMonth() / 12) * (100 / totalYears);

        return ((yearPosition + monthPosition) * 2) - PADDING;
    };

    const startScrolling = (direction: 'left' | 'right') => {
        if (scrollInterval) clearInterval(scrollInterval);

        const newInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                const scrollAmount = direction === 'left' ? -10 : 10; // Adjust scroll amount as needed
                scrollContainerRef.current.scrollLeft += scrollAmount;
            }
        }, 10); // Adjust interval time for smoother scrolling

        setScrollInterval(newInterval);
    };

    const stopScrolling = () => {
        if (scrollInterval) clearInterval(scrollInterval);
        setScrollInterval(null);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEventIndex(prevIndex => (prevIndex + 1) % sortedEvents.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [sortedEvents.length]);

    return (
        <div className="timeline-container">
            <div className="timeline-line" />
            <div className="years-scroll-container" ref={scrollContainerRef}>
                <div className="years-container">
                    {years.map((year, index) => (
                        <div
                            key={year}
                            className={`year-container ${index % 2 === 0 ? 'top' : 'bottom'}`}
                            style={{ left: `${(100 / totalYears) * index}%` }}
                        >
                            <div className="year-dot" />
                            <div className="year-label">{year}</div>
                        </div>
                    ))}
                    {sortedEvents.map((event, index) => {
                        const EventIcon = event.icon; // React Icons component
                        const eventDate = format(event.date, "MMMM yyyy");
                        const isActive = index === activeEventIndex;
                        
                        return (
                            <div
                                key={index}
                                className={`event-container ${index % 2 === 0 ? 'top' : 'bottom'} ${isActive ? 'active' : ''}`}
                                style={{ left: `${calculateEventPosition(event.date)}%` }}
                            >
                                <div className="event-icon-container">
                                    <EventIcon style={{ width: '50%', height: '50%', color: "#EFECE5" }} />
                                </div>
                                <div className="event-description">
                                    <div className="event-date">{eventDate}</div>
                                    <div>{event.description}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="scroll-buttons-container">
                <div
                    className="scroll-button left"
                    onMouseDown={() => startScrolling('left')}
                    onMouseUp={stopScrolling}
                    onMouseLeave={stopScrolling}
                    onTouchStart={() => startScrolling('left')}
                    onTouchEnd={stopScrolling}
                    onTouchCancel={stopScrolling}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <FaArrowLeft style={{ color: "#32312F" }} />
                </div>
                <div
                    className="scroll-button right"
                    onMouseDown={() => startScrolling('right')}
                    onMouseUp={stopScrolling}
                    onMouseLeave={stopScrolling}
                    onTouchStart={() => startScrolling('right')}
                    onTouchEnd={stopScrolling}
                    onTouchCancel={stopScrolling}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <FaArrowRight style={{ color: "#32312F" }} />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
