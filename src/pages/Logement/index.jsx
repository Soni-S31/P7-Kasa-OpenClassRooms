import React from 'react'
import './logement.css'
import Carousel from "../../components/Carousel/carousel"
import Rating from '../../components/Rating'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse/collapse'
import Error from '../../components/Error'


function Logement () {
  const data = require("../../logements.json")
  function getLogementWithId (data, logementId) {
      for (let logement of data) {
          if (logement.id === logementId) { 
              return logement
          }}}
    
  const {logementId} = useParams()
  const logement = getLogementWithId(data, logementId)
  
  if (!logement){
    return <Error/>
  }
  else{
  return(
    <main className='main_location'>
      <section >
        <div className='carousel_location'>
          <Carousel img={logement.pictures} /> 
        </div>
        
        <div className='location'>
          <div className='location_header'>
               <h2 className='location_header_title'key={"title"+logement.id}>{logement.title}</h2>
               <p className='location_header_city'>{logement.location}</p>
               <ul className='location_header_tags'>{logement.tags.map((tag)=>
                 <li className='location_header_tags_tag' key={tag.index}>{tag}</li>)}
                </ul>
          </div>
   
          <div className='location_host'>
              <div id="host" className='location_host_info'>
              <div className='host_name'>{logement.host.name}</div>
                <div className="host_picture">
                  <img src={logement.host.picture} alt="" />
                </div>
              </div>
              <div className='host_rating'>
                <Rating rate={parseInt(logement.rating)} />
             </div>
          </div>
           </div>
          <div className='location_info'>
            <div className='collapse_container'>
                <Collapse 
                title= "Description"
                content= {logement.description}
                />
            </div>
            <div className='collapse_container'>
                <Collapse 
                title="Equipement"
                content={
                    <ul>
                        {logement.equipments.map((equipment) => 
                        <li key={equipment}>{equipment}</li>)}
                    </ul>
                }
            />
              
              </div>
            
          </div>
            
        
    </section>   
  </main>
      )}}
export default Logement
 
 