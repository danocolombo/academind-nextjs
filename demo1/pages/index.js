import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <div>
        <h1>Main Start Page</h1>
      </div>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </>
  );
}
