import React from 'react'
import Cards from './Cards'
import Cart from './Cart'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'

const Home = () => {
  return (
    <div>
        <Container maxWidth="md" sx={{marginTop:'150px'}}>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
              <Box> <Cards/></Box>
              <Box> <Cart/></Box>
          </Box>
        </Container>
       
        
    </div>
  )
}

export default Home