'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ListContainer from '@/components/ListContainer'
import { useState, useEffect } from 'react'

export default function Home () {
  const [originalList, setOriginalList] = useState([])
  const [selectedCity, setSelectedCity] = useState(0)
  const [renderedList, setRenderedList] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('/stays.json')
      .then(response => response.json())
      .then(data => setOriginalList(data))
  }, [])

  useEffect(() => {
    setRenderedList(originalList)
    const temporalList = originalList.map(stay => stay.city)
    const citiesList = [...new Set(temporalList)]
    setCities(citiesList)
    console.log(`page: ${selectedCity}`)
  }, [selectedCity, originalList])

  return (
    <>
      <Header setSelectedCity={setSelectedCity} cities={cities} />
      <ListContainer list={renderedList} />
      <Footer />
    </>
  )
}
