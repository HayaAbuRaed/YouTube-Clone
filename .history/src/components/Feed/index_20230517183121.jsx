import React from 'react'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../data'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[setSelectedCategory])

  return (
    <Box>Feed</Box>
  )
}

export default Feed