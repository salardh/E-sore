
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import React, { useState } from 'react'


const Signup = () => {
    const [showpassword,setshowpassword]=useState (false)
    return (
        <Box class="container mt-4" >
            <Box >
                <Box>
                    <Typography className='text-center' variant='h5'>Get Start Shopping</Typography>
                    <Typography className='text-center' variant='body1'>Welcome to FreshCart! Enter your email to get started.</Typography>

                </Box>
                <Box> <TextField size='small' fullWidth type='email' placeholder='First Name' /></Box>
                <Box> <TextField size='small' className='my-4' fullWidth placeholder='Second name' /></Box>
                <Box> <TextField size='small' className='' fullWidth placeholder='E-mail' /></Box>
                <Box> <TextField type={showpassword ? "text" :"password"} size='small' className='my-4' fullWidth slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="start"  onClick={()=>setshowpassword(!showpassword)} >
                               
                               {showpassword ? <VisibilityIcon  /> : <VisibilityOffIcon/>}
                            </InputAdornment>
                        ),
                    },
                }} placeholder='password' /></Box>
                <Box> <Button fullWidth variant='contained'> Register</Button></Box>


            </Box>

        </Box>
    )
}

export default Signup