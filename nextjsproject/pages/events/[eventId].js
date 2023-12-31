 import EventSummary from '../../components/event-detail/event-summary' 
 import { getEventById } from '../../dummy-data'
import { useRouter } from "next/router"
 import { Fragment } from 'react'
 import EventLogistics from '../../components/event-detail/event-logistics'
 import EventContent from '../../components/event-detail/event-content'
// import ErrorAlert from '@/components/ui/error-alert'

function EventDetail() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)

    if (!event) {
        return (
            <div>
                <p>No event found!</p>
            </div>

        )
    }

    return (
        <div>
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>

        <div>
            <h1>Event Details</h1>
        </div>
        </div>
    )
}

export default EventDetail