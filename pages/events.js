import React from 'react'
import { useRouter } from 'next/router'
const EventList = ({eventList}) => {
  const router = useRouter()
  const [events, setEvents] = React.useState(eventList)
  
  const fetchSportsEvents = async () => {
    const response  = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setEvents(data)
    router.push('/events?category=sports', undefined, {shallow: true})
  }

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {
        events.map(e => {
          return (
            <div key={e.id}>
              <h2>
                {e.id} {e.title} {e.date} | {e.category}
              </h2>
              <p>{e.description}</p>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}

export async function getServerSideProps(context){
  const {query} = context
  const {category} = query
  const queryString = category ? 'category=sports' : ''

  const response  = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()
  return {
    props: {
      eventList: data
    }
  }
}



export default EventList