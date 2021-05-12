import React, {useState, useEffect} from 'react'
import axios from 'axios';
import HomePage from './pages/HomePage/HomePage';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import FirstToolBar from './pages/HomePage/login/FirstToolBar';
import LoginPage from './pages/HomePage/login/LogInPage';
import News from './pages/HomePage/News';
import Support from './pages/HomePage/Support';
import Trending from './pages/HomePage/Trending'
import ApiDisplay from './pages/HomePage/ApiDisplay/ApiDisplay';
import Logout from './pages/HomePage/login/Logout'
import SecToolBar from './pages/HomePage/ApiDisplay/SecToolBar';



function App() {
  const [newsData, setNewsData] = useState([])
  console.log(newsData)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=adb3b5cf94e64fc4938479a2e8697daa',
      );
 
      setNewsData(result.data.articles);
    };
 
    fetchData();
  }, []);



  return (

    <div>
      
        <Router>
              <nav>
                 
                  <LoginPage/>
                  
            
              </nav>

              <Switch>
                <Route path="/News">
                  <News newsData = {newsData} />
                </Route>
                <Route path="/Support">
                  <Support />
                </Route>
                <Route path="/Trending">
                  <Trending />
                </Route>
                <Route path="/Login">
                  <LoginPage />
                </Route>
                <Route path="/ApiDisplay">
                  <ApiDisplay />
                </Route>
                <Route path="/Logout">
                  <Logout />
                </Route>
              </Switch>

        </Router>

    </div>
)
}
export default App;
















