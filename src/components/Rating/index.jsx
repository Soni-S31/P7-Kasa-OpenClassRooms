import {FaStar} from 'react-icons/fa'

function Rating ({rate}){
    const maxRate = 5;
    const star = rate;
    const greyStar = maxRate - star
    let starArray = []

    for (let i=0; i<star; i++){
        starArray.push(<div className='rate_star'><FaStar /></div>)
    }
    for (let i=0; i<greyStar; i++){
        starArray.push(<div className='rate_greyStar'><FaStar /></div>)
    }

    return(
        <div className='rating'>
            {starArray}
        </div>
    )



}
export default Rating