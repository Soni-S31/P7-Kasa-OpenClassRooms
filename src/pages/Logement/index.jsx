import React from 'react'
import './logement.css'
import Carousel from "../../components/Carousel"
//import Tags from "../../components/Tags"
//import Rating from '../../components/Rating'
//import CollapseLogement from '../../components/CollapseLogement'
import { useParams } from 'react-router-dom'


function Logement () {
  const data = require("../../logements.json")
  function getLogementWithId (data, logementId) {
      for (let logement of data) {
          if (logement.id === logementId) { 
              return logement
          }}}
    
  const {logementId} = useParams()
  const logement = getLogementWithId(data, logementId)
  
  return(
    <main className='main_location'>
      <section >
        <div className='carousel_location'>
          <Carousel img={logement.pictures} /> 
        </div>

        <div className='location'>
          <div className='location_header_title'>
               <h2 className='location_title'key={"title"+logement.id}>{logement.title}</h2>
               <p className='location_city'>{logement.location}</p>
               <div className='location_tags'>{logement.tags}</div>
          </div>
   
          <div className='location_host'>
              <div id="host" className='location_host_info'>
                <div className="host_picture">
                  <img src={logement.host.picture} alt="" />
                </div>
                <div className='host_name'>{logement.host.name}</div>
              </div>
              <div className='host_rating'>
                <div rating={logement.rating} key={logement.id}/></div>
             </div>
          </div>
           
          <div className='location_info'>
            <div className='collapse_info' text={logement.description} id={"Description"} />
            <div className='collapse_info' text={logement.equipements} id={"Equipements"} />
          </div>
    </section>   
  </main>
      )}
export default Logement
 
 