import { getAllEvents } from '../../dummy-data.js';
import EventList from '../../components/events/event-list';

export default function AllEventsPage() {
    const theEvents = getAllEvents();
    if (!theEvents) {
        return <p>No Events to display</p>;
    }
    return (
        <div>
            <h2>All Events Page</h2>
            <EventList items={theEvents} />
        </div>
    );
}
