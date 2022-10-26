import React, { useState} from 'react'
import nextIcon from '../../assets/chevronDroit.png'
import previousIcon from '../../assets/chevronGauche.png'
import './gallery.css'

export default function Gallery(props){

    const [pictureId, setPictureId] = useState(0);
    

    const onNext = () => {
        if(pictureId === props.img.length - 1){
            setPictureId(0)
        } else {
            setPictureId(pictureId + 1)
        }
    }

    const onPrev = () => {
        if(pictureId === 0){
            setPictureId(props.img.length - 1)
        } else {
            setPictureId(pictureId - 1)
        }
    }

    return (
        <div className="gallery">
            <div className="gallery_container" >
            {props.img.map((picture) => 
            <img src={picture} key={picture} alt="photos" className='gallery_container_img'  />)}
            </div>
            <div className={'gallery_controls'}>
                <img src={previousIcon} className={'chevron'} alt="previous" onClick={onPrev} />
                <img src={nextIcon} className={'chevron'} alt="next" onClick={onNext}/>
            </div>
            <div className={'gallery_idx'}>{pictureId + 1} / {props.img.length}</div>
        </div>
    );
}


    


