import React, { Fragment } from "react";
import { useRouter } from "next/router";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

import { getEventById } from "../../dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const theEvent = getEventById(eventId);
  if (!theEvent) {
    // no event found
    return <p>No Event Found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={theEvent.title} />
      <EventLogistics
        date={theEvent.date}
        address={theEvent.location}
        image={theEvent.image}
        imageAlt={theEvent.title}
      />
      <EventContent>
        <p>{theEvent.description}</p>
      </EventContent>
    </Fragment>
  );
}
