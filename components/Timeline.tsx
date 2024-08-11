import React from 'react';

interface TimelineProps {
  startYear: number;
}

const Timeline: React.FC<TimelineProps> = ({ startYear }) => {
  // Calculate the number of years
  const totalYears = (new Date().getFullYear() + 1) - startYear;
  // Array of years to display
  const years = Array.from({ length: totalYears + 1 }, (_, i) => startYear + i);

  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="years-scroll-container">
        <div className="years-container">
          {years.map((year, index) => (
            <div
              key={year}
              className={`year-container ${index % 2 === 0 ? 'top' : 'bottom'}`}
              style={{ left: `${(150 / totalYears) * index}%` }}
            >
              <div className="year-dot" />
              <div className="year-label">{year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
