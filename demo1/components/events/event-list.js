import EventItem from "./event-item.js";
import classes from "./event-list.module.css";
function EventList(props) {
  const { items } = props;
  {
    // const util = require('util');
    // console.log('items:  \n' + util.inspect(items, { showHidden: false, depth: null }));
  }
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
export default EventList;
