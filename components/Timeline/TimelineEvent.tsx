interface TimelineEventProps {
    icon: React.ReactNode;
    label?: string;
    date?: string; // Example of an additional prop
    description?: string; // Another example of an additional prop
  }

const TimelineEvent: React.FC<TimelineEventProps> = ({icon}) => {

    return (
        <div className="timeline-event">
            <div className="timeline-icon-container">{icon}</div>
        </div>
    )
}
export default TimelineEvent;