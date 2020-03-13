import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';



function SearchResults({searched, destFrom, destTo, checkValue}) {
  const [ flightResults, setFlightResults] = useState([])
  const [ numberOfResults, setNumberOfResults ] = useState(5)
  const [ hideButton, setHideButton ] = useState(true)
  const [ dataNumberOfResults, setDataNumberOfResults] = useState(100)
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {
    setNumberOfResults(5)}, [searched, destFrom, destTo])

  useEffect(() => {
    getFlights()}, [searched, destFrom, destTo])

  useEffect(() => {
    getFlights()}, [numberOfResults])


  const handleMoreResultsClick = () => {
      setNumberOfResults(numberOfResults + 5)
  }

  const getFlights = async (origin=destFrom, destination=destTo, direct=checkValue) => {
    if(searched === false || origin === undefined || destination === undefined) {
      return
    }
    setLoading(true)
    setHideButton(false)
    const directFlight = Number(direct)

    const when = DateTime.local().plus({ days: 1 }).toFormat('dd/MM/yyyy');
    const query = new URLSearchParams({
      partner: 'picky',
      fly_from: origin,
      fly_to: destination,
      date_from: when,
      direct_flights: directFlight,
      limit: numberOfResults
    })
    const url = new URL(`?${query}`, 'https://api.skypicker.com/flights')
    try {
      const promise = await fetch(url)
      const data = await promise.json()
      setFlightResults(data.data)
      setDataNumberOfResults(data._results)
      setHideButton(false)
      setLoading(false)
      if (numberOfResults < dataNumberOfResults) {
        setHideButton(false)
      } else {
        setHideButton(true)
      }

    } catch(err) {
      console.log('error fetching flights', err)
    }
  }

  const renderedFlights = flightResults.map(data => {
    console.log(data)
    let departureDate = DateTime.fromMillis(data.dTime * 1000).toFormat('hh:mm')
    let arrivalDate = DateTime.fromMillis(data.aTime * 1000).toFormat('hh:mm')
    return (
      <div key={data.id}>
        <p>From: {data.cityFrom} at {departureDate}</p>
        <p>To: {data.cityTo} at {arrivalDate}</p>
        <p>Number of layovers: {(data.route.length == 1) ? 'Direct' : data.route.length - 1}</p>
        <p>Length: {data.fly_duration}</p>
        <p> Price: {data.price} €</p>
        <hr />
      </div>
    )
  })
    

  return (
    <div>
      {(loading) ? "Page is loading" : renderedFlights}
      <br />
      <button hidden={hideButton} onClick={handleMoreResultsClick}> Show more flights </button>
    </div>
  )
}

export default SearchResults