import React, { useState } from 'react'
// import { Redirect } from 'react-router'
import ApiDisplay from '../ApiDisplay/ApiDisplay'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockIcon from '@material-ui/icons/Lock';
import ToolBar from '../ApiDisplay/SecToolBar'
import FirstToolBar from './FirstToolBar';
import { Redirect } from "react-router-dom";
import SecToolBar from '../ApiDisplay/SecToolBar';
import '../../../components/App.css'


const LoginPage = (props) => {
  
  
  const [loggedin, setLoggedin] = useState(false)

  const  handleSubmit = () => {
     setLoggedin(true)
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'green',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
                                          }));
  const classes = useStyles();


  if (!loggedin) {

    return (

      <div className='background' >



{/* style={{display: 'flex',  justifyContent:'center', alignItems:'center', }} */}
      <div  >
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} > Welcome to REACT TUNES</h1>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} > PLEASE  LOG IN TO ENJOY OUR CONTENT </h1>
      </div>


      <div  >
      
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} >
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              value={props.username} 
              autoComplete="email"
              autoFocus
            />
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={props.password} 
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              style={{backgroundColor: 'green'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </div>
      



      </div>   
    )
    }
   else if (loggedin) {

     return (
             <div>
                 <FirstToolBar/>
                <Redirect to="/ApiDisplay" />
                
               </div>
             )
   } 
    
}

export default LoginPage