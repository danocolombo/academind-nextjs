import React, { Fragment } from "react";
import { useRouter } from "next/router";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventAlert from "../../components/ui/error-alert";

import { getEventById } from "../../dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const theEvent = getEventById(eventId);
  if (!theEvent) {
    // no event found
    return (
    <Fragment>
      <EventAlert>
      <p>No Event Found</p>
      </EventAlert>
      </Fragment>);
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
