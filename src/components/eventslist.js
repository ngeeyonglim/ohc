// src/pages/Events.js
import React from 'react'
import './eventslist.css'

const events = [
  {
    id: 1,
    title: 'Community Cleanup',
    date: 'June 15, 2025',
    description: 'Join us in cleaning up the neighborhood park and enjoy a picnic afterward.',
  },
  {
    id: 2,
    title: 'Charity Run 2025',
    date: 'July 10, 2025',
    description: 'A 5km run to raise funds for local shelters. All ages welcome!',
  },
  {
    id: 3,
    title: 'Art & Music Fest',
    date: 'August 20, 2025',
    description: 'Enjoy performances by local bands and artists. Food stalls available.',
  },
  {
    id: 4,
    title: 'Tech for Good Hackathon',
    date: 'September 5-6, 2025',
    description: 'A weekend hackathon to create tech solutions for community challenges.',
  },
  {
    id: 5,
    title: 'Volunteer Orientation',
    date: 'October 1, 2025',
    description: 'Learn how you can get involved with our community initiatives.',
  }
]

const Eventslist = () => {
  return (
    <div className="events-container thq-section-padding thq-section-max-width">
      <h1 className="events-title thq-heading-1">Upcoming Events</h1>
      <div className="thq-grid-auto-300">
        {events.map((event) => (
          <div key={event.id} className="thq-card thq-box-shadow">
            <div className="event-content">
              <h2 className="event-title thq-heading-3">{event.title}</h2>
              <p className="event-date thq-body-small">{event.date}</p>
            </div>
            <p className="event-description thq-body-large">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Eventslist
