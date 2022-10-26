import React from 'react'
import './logement.css'
import Gallery from "../../components/Gallery"
//import Tags from "../../components/Tags"
//import Rating from '../../components/Rating'
//import CollapseLogement from '../../components/CollapseLogement'
import { Loader } from '../../utils/style/Loader'
import { useFetch } from '../../utils/hooks'

export default function Logement () {
    const { data, isLoading, error } = useFetch(`/logements.json`)
    
    if (error) {
      return <pre>{error}</pre>
    }


    return(
      <main>
        {isLoading ? (
            <div className="loader_wrapper">
              <Loader data-testid="loader" /></div>
          ) : (data.map((logement) => (
            
            <section key={logement.id}>
              <Gallery img={logement.pictures} /> 
           
              <div className='location'>
             <div className='location_header_title'>
               <h2 className='location_title'key={"title"+logement.id}>{logement.title}</h2>
               <p className='location_city'>{logement.location}</p>
               <div className='location_tags'>{logement.tags}</div>
             </div>
   
             <div className='location_host'>
                 <div id="host" className='location_host_info'>
                   <img key="host-picture" src={logement.host.picture} alt="Hôte" />
                   <p key="host-name">{logement.host.name}</p>
                 </div>
                 <div className='host_rating'>
                <div rating={logement.rating} key={logement.id}/>
                </div>
             </div>
              </div>
           
              <div className='location_info'>
               <div className='collapse_info' text={logement.description} id={"Description"} />
               <div className='collapse_info' text={logement.equipments} id={"Equipements"} state={"open"}/>
              </div>
            </section>
          )
             ))}
            
      </main>
      )
    }


  
 
 