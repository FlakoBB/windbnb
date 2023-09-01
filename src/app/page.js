'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ListContainer from '@/components/ListContainer'
import { useState, useEffect } from 'react'

export default function Home () {
  const [originalList, setOriginalList] = useState([])
  const [renderedList, setRenderedList] = useState([])
  const [cities, setCities] = useState([])
  const [searchParams, setSearchParams] = useState({ city: 'Helsinki', guests: 6 })

  useEffect(() => {
    fetch('/stays.json')
      .then(response => response.json())
      .then(data => setOriginalList(data))
  }, [])

  useEffect(() => {
    if (searchParams.city !== '' || searchParams.guests !== 0) {
      const filteredList = originalList.filter(stay => {
        if (searchParams.city !== '' && searchParams.guests !== 0) {
          if (stay.city === searchParams.city && stay.maxGuests >= searchParams.guests) {
            return true
          }
        } else if (searchParams.city !== '') {
          if (stay.city === searchParams.city) {
            return true
          }
        } else if (searchParams.guests !== 0) {
          if (stay.maxGuests >= searchParams.guests) {
            return true
          }
        }
        return null
      })
      setRenderedList(filteredList)
    } else {
      setRenderedList(originalList)
    }
    const temporalList = originalList.map(stay => stay.city)
    const citiesList = [...new Set(temporalList)]
    setCities(citiesList)
  }, [searchParams, originalList])

  return (
    <>
      <Header setSearchParams={setSearchParams} cities={cities} />
      <ListContainer list={renderedList} />
      <Footer />
    </>
  )
}
