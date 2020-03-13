import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const searchFlights = (origin='PRG', destination='CDG', direct='1') => {
  const when = DateTime.local().plus({ days: 1 }).toFormat('dd/MM/yyyy');
  const query = new URLSearchParams({
    partner: 'picky',
    fly_from: origin,
    fly_to: destination,
    date_from: when,
    direct_flights: direct,
    limit: 5
  })

  const url = new URL(`?${query}`, 'https://api.skypicker.com/flights')
  console.log('url', url)

}

function SearchResults(props) {

  return (
    <div>
      Hello
    </div>
  )
}

export default SearchResults