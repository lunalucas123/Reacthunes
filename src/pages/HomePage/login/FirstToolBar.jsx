import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import News from '../News'
import Support from '../Support'
import Trending from '../Trending'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function FirstToolBar(props) {
  console.log(props.loggedin)
  const classes = useStyles();

  
    return (
              <div className={classes.root}>
             
              
                    <AppBar position="static">
                      <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                          <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                                REACTUNES
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                              <Link to={"/News"}>SPORTS NEWS</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                              <Link to="/Trending">TRENDING</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                              <Link to="/Support">SUPPORT</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                              <Link to="/Logout">LogOut</Link>
                        </Typography>
                       
                      </Toolbar>
                    </AppBar>
                        
                  
              
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
             </div> 
              
  )
}