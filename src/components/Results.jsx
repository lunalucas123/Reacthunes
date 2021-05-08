import axios from 'axios';
import React,{useState, useEffect} from 'react'
import './App.css'
import singer from '../images/singers.jpeg'

function Results(props) {
 

  if (props.submit){
        return (

   <div >
            {props.fetchedData.length > 0 && 

                        <div style={{color :'green', fontSize:25, paddingLeft:100 }}>
                                      
                                      <h1>{props.searchedData[0].toUpperCase() + props.searchedData.slice(1,)}'s songs </h1>      
                        </div> 
                    
              }

          {props.fetchedData.length > 0 && 
              
          <table style={{width:500}}>
                        
                          <thead >  
                            <tr >
                                  <td  style={{
                        border: "2px solid rgb(0, 0, 0)",fontSize:25
                      }}>  SONG </td>
                                  <td style={{
                        border: "2px solid rgb(0, 0, 0)",fontSize:25
                      }} >  PAGE LINK </td>
                                  <td style={{
                        border: "2px solid rgb(0, 0, 0)",fontSize:25
                      }}>  PREVIEW URL </td>

                            </tr> 
                          </thead>
            

                  {props.fetchedData.length > 0 && props.fetchedData.map((s,item) => ( 
              
                          <tbody >
                                <tr  key={props.item}  >
                                        
                                  
                                                <td  style={{
                                                  border: "1px solid rgb(0, 0, 0)", fontSize:23
                                                }}>{s.trackName}</td>
                                                        

                                                          
                                                                    <td style={{
                                                  border: "1px solid rgb(0, 0, 0)",fontSize:25
                                                }} > <a href = {s.trackViewUrl} target = 'blank' rel="noopener noreferrer"> Listen Album</a></td>
                                                          
                                                          
                                                          
                                                                    <td   style={{
                                                  border: "1px solid rgb(0, 0, 0)",fontSize:25
                                                }}> <a href = {s.previewUrl} target = 'blank' rel="noopener noreferrer"> Song preview</a></td>
                                      
                                        
                                    </tr>
                        
                          </tbody>
              

                  ))}
          </table>
        }  

</div>
); 


  } else {
    return(

              <div >

                  <img className='singers' src={singer} alt=""/>
            
              </div>
          )
        }
}

export default Results
