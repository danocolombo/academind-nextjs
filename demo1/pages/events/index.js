import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search.js';


export default function AllEventsPage() {
    const router = useRouter();
    const theEvents = getAllEvents();

    function findEventsHandler (year, month) {
        // create slug destination
        const fullPath = `/events/${year}/${month}`;
;        router.push(fullPath);
    }
    if (!theEvents) {
        return <p>No Events to display</p>;
    }
    return (
        <Fragment>
            <h2>All Events Page</h2>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={theEvents} />
        </Fragment>
    );
}
