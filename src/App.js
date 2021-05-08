import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Welcome from './components/Welcome'
import Results from './components/Results.jsx'
import Api from './components/TicketMasterApi'
import Calendario from './components/Calendar'


import './components/App.css'


function App() {
  const [searchedData, setSearchedData] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  const [dataEvent, setDataEvent] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  // console.log(searchedData)
  // console.log(searchedData)

  const handleSubmit = e => {
      e.preventDefault()
      setLoading(true)
      axios.get(`https://itunes.apple.com/search?term=${searchedData}&limit=5`)
            .then(res=>{
                setFetchedData(res.data.results)
                console.log(fetchedData)
                // console.log(searchedData)
               
                setSubmitted(true)
                // console.log(fetchedData)
            })


      axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchedData}&source=ticketmaster&size=10&countryCode=US&apikey=EAJQULrpebKfWjonhZ05WspYMwVyvGnp`)
    
                .then(res=>
                  
                  {setDataEvent(res.data._embedded.events)
                  
                  // console.log(searchedData)
                  console.log(dataEvent)
                  setSubmitted(true)
                  // console.log(dataEvent)
                  
              
              })
            
            .catch(err=>{
                console.log(err);
            })
    
  } 


  return (
 <div>
              <div className='app'>

                      <div className= "one">
                          <Welcome />
                      </div>  
                     

                      <div className='two' >
                            <form  onSubmit={handleSubmit}  onClick={fetch}>
                              <div >
                                    <input style={{color :'green', fontSize:25}} 
                                    type= 'text'  placeholder= 'artist...' value = {searchedData} onChange={(e) => setSearchedData(e.target.value)} />
                                    <input  style={{
                                                      color :'green', fontSize:25, 
                                                    }}
                                    type= 'submit' value= "SEARCH" />
                              </div>
                            </form>
                      </div>     

                      <div className='three' >
                          <Results searchedData = {searchedData} fetchedData = {fetchedData} submit={submitted}/> 
                      </div> 


                      <div className='four'>
                              <div style={{width:410, height:300, paddingLeft:30, paddingRight:130}} id="wwo-weather-widget-2"></div>  
                      </div>


                      

                      <div className='five'>  
                         <div > <Calendario /> </div>                  
                       
                      </div>  
                      
                      <div className='six'> 
                      
                        <Api submit={submitted} searchedData={searchedData} dataEvent={dataEvent} />


                      </div>  
              </div>
              


</div>


  )
 }
export default App;
















