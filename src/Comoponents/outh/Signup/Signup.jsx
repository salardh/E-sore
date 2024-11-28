import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const Signup = () => {
  const Signupschema = yup.object({
    firstName: yup.string().required("First name is requied"),
    secondname: yup.string().required("second name is requied"),
    email: yup.string().required("email is requied"),
    Password: yup.string().required("password is requied"),
  })

  const { control, handleSubmit ,formState:{ errors } } = useForm({
    defaultValues: {
      firstName: '',
      secondname: '',
      email: '',
      Password: '',
    },
    resolver: yupResolver(Signupschema)
    })
    const [showpassword,setshowpassword]=useState (false)
  return (
  <form onSubmit={handleSubmit((data)=>{console.log(data);
  })}>
     <div className='w-50 container'>
  <Box className="text-center">
  <Typography variant='h4'>Get Start Shopping</Typography>
  <Typography variant='body1'>Welcome to FreshCart! Enter your email to get started.</Typography>
  
  </Box>
  <Box>
  <Controller
          name="firstName"
          control={control}
          render={({ field }) =>(
      <TextField error={errors?.firstName?true:false} {...field} size='small' type='text' fullWidth placeholder='First Name'/>)}/>
  <Typography className='text-danger'> {errors?.firstName?.message} </Typography>
  </Box>
  <Box>
  <Controller
          name="secondname"
          control={control}
          render={({ field }) =>(
      <TextField error ={errors?.secondname? true:false} {...field} size='small' type='text' fullWidth placeholder='secondname'/>)}/>
 <Typography className='text-danger'>{errors?.firstName?.message}  </Typography>
  </Box>
  <Box>
  <Controller
          name="email"
          control={control}
          render={({ field }) =>(
      <TextField error={errors?.email?true:false} {...field} size='small' type='email' fullWidth placeholder='email'/>)}/>
  <Typography className='text-danger'> {errors?.email?.message} </Typography>
  </Box>
  <Box>
  <Controller
        name=" Password"
        control={control}
        render={({ field }) => (
      <TextField error={errors?.Password?true:false} {...field} 
       className='my-4' size='small' type={showpassword?"text":"password"} fullWidth 
       slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start" onClick={()=>setshowpassword(!showpassword)}>
               {showpassword?  <VisibilityOffIcon/> :<VisibilityIcon />}
              </InputAdornment>
            ),
          },
        }} placeholder='Password'/> )}/>
        <Typography className="text-danger">{errors?.Password?.message} </Typography>
  </Box>
  <Box>
      <Button type='submit' fullWidth size='small' variant='contained'> Register </Button>
  </Box>
  
  
      </div>
      </form>
  )
}

export default Signup