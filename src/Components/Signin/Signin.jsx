import { AccountCircle } from '@mui/icons-material'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signin = () => {
  const[showpassword,setshowpassword]=useState(false)
  return (
    <Box class ="container mt-4" >
    <Box >
<Box>
<Typography className='text-center' variant='h5'>Sign in to FreshCart</Typography>
<Typography className='text-center' variant='body1'>Welcome back to FreshCart! Enter your email to get started.</Typography>
    
</Box>
<Box> <TextField size='small' fullWidth type='email' placeholder='E-mail'/></Box>
<Box> <TextField type={showpassword?"text":"password"} size='small' className='my-4' fullWidth  slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
               {showpassword? <VisibilityIcon/>: <VisibilityOffIcon/>}
              </InputAdornment >
            ),
          },
        }} placeholder='password'/></Box>
<Box> <Button fullWidth variant='contained'> Sign in</Button></Box>


    </Box>
    <Typography className='mt-4 text-center'> Don’t have an account? <Link to="/signup">Sign Up</Link></Typography>
    </Box>
  )
}

export default Signin