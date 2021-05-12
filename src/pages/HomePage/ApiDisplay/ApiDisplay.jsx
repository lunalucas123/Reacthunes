import React,{useState} from 'react'
import axios from 'axios';
import Welcome from '../../../components/Welcome'
import Results from '../../../components/Results.jsx'
import Api from '../../../components/TicketMasterApi'
import Calendario from '../../../components/Calendar'
import '../../../components/App.css'
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import SecToolBar from './SecToolBar';




export default function ApiDisplay(props){

  const [searchedData, setSearchedData] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  const [dataEvent, setDataEvent] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loggedin, setLoggedin] = useState(false)
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '4fa16533625433b83b746891e864cd48',
    lat: '41.8755616',
    lon: '-87.6244212',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  })
  // console.log(props)




  // const handleLogin = () => {
  //   setLoggedin(true)
  // }

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
                  // console.log(dataEvent)
                  setSubmitted(true)
                  // console.log(dataEvent)
                  
              
              })
            
            .catch(err=>{
                console.log(err);
            })
    
  } 


    

      return (
       
        <div> 
        {/* <div><SecToolBar/> </div> */}

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

                <div className='weather'>
              <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Chicago"
            unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
            showForecast
          />
              {/* <ReactWeather forecast="today" apikey="4fa16533625433b83b746891e864cd48" type="auto" /> */} 
              
              </div>


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