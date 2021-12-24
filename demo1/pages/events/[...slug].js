import React, { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents, getFilteredEvents } from "../../dummy-data.js";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    //no path info received, continue to load
    return <p className="center">Loading...</p>;
  }
  // the + converts the string to number
  const searchYear = +filterData[0];
  const searchMonth = +filterData[1];

  // we want to check, since the values are coming in on url, someone could attempt to navigate directly
  if (
    isNaN(searchYear) ||
    isNaN(searchMonth) ||
    searchYear > 2022 ||
    searchYear < 2021 ||
    searchMonth < 1 ||
    searchMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Search Request</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">
            Show All Events
          </Button>
        </div>
      </Fragment>
    );
  }
  const searchResults = getFilteredEvents({
    year: searchYear,
    month: searchMonth,
  });
  // check to make sure we got something back
  if (!searchResults || searchResults.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">
            Show All Events
          </Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(searchYear, searchMonth - 1);
  return (
    <Fragment>
      <h2>Filtered Events</h2>
      <div className="center">
        <ResultsTitle date={date} />
      </div>
      <EventList items={searchResults} />
    </Fragment>
  );
}
