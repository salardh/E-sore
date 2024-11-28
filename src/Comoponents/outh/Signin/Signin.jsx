import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Signin = () => {
  const Singinschema = yup.object({
    email: yup.string().required("email is requied"),
    password: yup.string().required("Password is requieed"),
    })
  const { control, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
      ,},
      resolver: yupResolver( Singinschema)
      })
    const [showpassword,setshowpassword]=useState(false)
  return (
  <form onSubmit={handleSubmit((data)=>{console.log(data);
  })}>

<div className='w-50 container'>
<Box className="text-center">
<Typography variant='h4'>Sign in to FreshCart</Typography>
<Typography variant='body1'>Welcome back to FreshCart! Enter your email to get started.</Typography>

</Box>
<Box>
<Controller
        name="email"
        control={control}
        render={({ field }) =>(
    <TextField error={errors?.email?true:false} {...field} size='small' fullWidth placeholder='Email'/> )}/>
    <Typography className='text-danger'> {errors?.email?.message} </Typography>
</Box>
<Box>
<Controller
        name="password"
        control={control}
        render={({ field }) =>(
    <TextField error={errors?.password?true:false} {...field} type={showpassword?"text":"password"} className='my-4' size='small' fullWidth 
    slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
             {showpassword? <VisibilityOffIcon />: <VisibilityIcon/>}
            </InputAdornment>
          ),
        },
      }} placeholder='Password'/> )}/>
      <Typography className='text-danger'>
        {errors?.password?.message}
      </Typography>
</Box>
<Box>
    <Button type='submit' fullWidth size='small' variant='contained'> Sign in </Button>
</Box>
<Box className="mt-4 text-center">Don’t have an account? <Link to="/signup"> Sign Up</Link></Box>

    </div>
  </form>
  )
}

export default Signin