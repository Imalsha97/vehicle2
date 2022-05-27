import { Grid, Paper,Avatar, TextField, Button, Link ,Typography } from '@material-ui/core';
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '../UI/AppBar';

const Login = () => {
  const paperStyle = {padding:20,height:'70vh',width:300,margin:"20px auto"}
  const avatarStyle = {backgroundColor:'aqua' }
  const btnStyle = {margin:'8px 0',backgroundColor:'aqua'}
 
  return (
    <>
    <AppBar/>
    <Grid style={{paddingTop:70}}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
       <h1>Welcome to Karadiya</h1>
       <h3>Sign In</h3>
        </Grid>
        <TextField label='Username' placeholder='Enter Username' fullWidth required/>
        <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
        <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="aqua"
                    />
                    }
                    label="Remember me"
                 />
        <Button type='submit' color='primary' variant="contained" style={btnStyle}  fullWidth>Sign in</Button>
        <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
      </Paper>
    </Grid>
    </>
    
  )
}

export default Login