import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function News(props) {
  console.log(props)

 




  return (

    <div style={{color :'blue', fontSize:25}}>
      <h1>Sports Articles </h1>
        <ul>
          {props.newsData.map(item => (

            <div >
            <li key={item.objectID}>  <a href= {item.url} > {item.source.name} </a> {item.title} </li>
            <img style={{ height: 100,  alignItems: "center", justifyContent: "center"}} key={item.objectID} src={item.urlToImage} className="img-responsive" />
        

          </div>


          ))}
        </ul>   
    
    </div>
    
  )
}
