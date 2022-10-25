import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './location.css'
// -------Composents-----------



export default function Location() {
  const [location, setLocation] = useState({host:{'name':'', 'picture':''}, rating:'', tags:[], pictures:[], equipements:[]});
  // id location
  let {id} = useParams();

  useEffect (function (){
    fetch('/locations.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        for (let i=0; i<data.length; i++){
            if (data[i].id === id){
                setLocation(data[i])
            }
        }
    })
},);

  
  return (
    <main className='main_location'>
      
      <section className='galery_location'>
        <div className='slide_picture' img={location.pictures}/>
      </section>

      <section className='location'>
        <div className='location_header'>
            <div className='location_header_title'>
              <h2 className='location_title'> {location.title}</h2>
              <p className='location_city'>{location.location}</p>
            </div>
            <div className='location_header_tag'>{location.tags}</div>
        </div>
        <div className='location_host'>
            <div className='location_renter_avatar' name={location.host.name} picture={location.host.picture}></div>
            <div className='location_renter_stars' key={location.id} rating={location.rating}></div>
        </div>
      </section>

      <section className='collapse_container'>
        <div className='collapse_container_description'>
            <div className='collapse_description'
              title='Description'
              content={location.description}>
            </div>
        </div>
        <div className='collapse_container_equipement'>
            <div className='collapse_equipement'
            title='Equipements'
            content={
              <ul>
              {location.equipements}
                <li>
                </li>
              </ul>}
              >
          </div>
        </div>
      </section>
    </main>
  );}

 