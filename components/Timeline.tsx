import React from 'react';
import { IconType } from 'react-icons';

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

    const calculateEventPosition = (eventDate: Date) => {
        const eventYear = eventDate.getFullYear();
        const yearIndex = eventYear - startYear;
        const yearPosition = (100 / totalYears) * yearIndex;

        // Calculate the month position within the year
        const monthPosition = (eventDate.getMonth() / 12) * (100 / totalYears);

        return ((yearPosition + monthPosition) * 2) - PADDING;
    };


    return (
        <div className="timeline-container">
            <div className="timeline-line" />
            <div className="years-scroll-container">
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
                        return (
                            <div
                                key={index}
                                className="event-container"
                                style={{ left: `${calculateEventPosition(event.date)}%` }}
                            >
                                <div className="event-icon-container">
                                    <EventIcon style={{ width: '50%', height: '50%', color: "#EFECE5" }} title={event.description} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
