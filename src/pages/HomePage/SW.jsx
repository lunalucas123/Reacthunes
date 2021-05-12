import React from 'react'
import News from '../News'
import Support from '../Support'
import Trending from '../Trending'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";




import ToolBar from './login/Toolbar';

export default function SW() {
  return (
    <div>

<BrowserRouter>
      <div>
      
                    <Switch>
                              <Route path="/News"><News/></Route>
                  
                    </Switch>
      </div>     
    </BrowserRouter>
      
    

    </div>
  )
}
