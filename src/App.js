import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, typography } from '@mui/system'
import Paper from '@mui/material/Paper';
import { Typography, Container , Avatar} from '@mui/material';


const App = (prop) => {
  const [name, setname] = useState('');
  const [data, setdata] = useState([]);
  
  const HandelSubmit=(e)=>{
    e.preventDefault();
    fetch(`https://api.github.com/users/${name}`)
    .then((response)=>response.json())
    .then((value)=>{
      console.log(value)
      setdata(value) })
    setname('')
    
  }
  return (
    <>
    <Container maxWidth="sm" sx={{}}>
      
    
   
     <form onSubmit={HandelSubmit}>
       <TextField
         id="name"
         label="Username"
         value={name}
         onChange={(e)=>setname(e.target.value)}
         
       />
       <Button type='submit' variant="contained" color="secondary">
         Search
       </Button>
       
     </form>
    
     </Container>
    
          <Container maxWidth="md" sx={{}}>
            <Box sx={{justifyContent:'center'}}>
                  <Avatar
          alt="Remy Sharp"
          src={data.avatar_url}
          sx={{ width: 56, height: 56 }}
            />
            </Box>
          <Paper elevation={3} sx={{p:1 , m:1 , width:'200px'}} >
            <Typography>User ID : {data.id}</Typography>
             </Paper>
             <Paper elevation={3} sx={{p:1 , m:1 , width:'200px'}} >
            <Typography>UserName : {data.name}</Typography>
             </Paper>
             <Paper elevation={3} sx={{p:1 , m:1 , width:'200px'}} >
            <Typography>Resposetry : {data.public_repos}</Typography>
             </Paper>
             <Paper elevation={3} sx={{p:1 , m:1 , width:'200px'}} >
            <Typography>Twiter username : {data.twitter_username}</Typography>
             </Paper>
            
             
             </Container>
     
   
   </>
    
  )
}

export default App
