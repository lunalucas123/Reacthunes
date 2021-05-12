import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import News from '../News'
import Error from '../Error'


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

export default function SecToolBar(props) {

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
                              <Link to={"/News"}>NEWS</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                              <Link to="/Trending">TRENDING</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                              <Link to="/Support">SUPPORT</Link>
                        </Typography>
                       
                       
                      </Toolbar>
                    </AppBar>
                        
             
          </div>   

  )
}