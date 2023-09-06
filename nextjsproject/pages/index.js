import EventList from "/components/events/event-list"
import { getFeaturedEvents } from "../dummy-data"

function Homepage() {
  const futureEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={futureEvents} />
      <h1>Home Page</h1>
    </div>
  )
}
export default Homepage