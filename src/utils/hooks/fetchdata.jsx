import { Component } from 'react'
import './fetchdata.css'

class fetchData extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: {},
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch(`/logements.json`)
        .then((response) => response.json())
        .then((jsonResponse) => {
            if(this.props.match){
                for(let logement of jsonResponse){
                    const { id_logement } = this.props.match.params
                    if(logement.id === id_logement){ 
                        this.setState({ data: logement, isLoading: false }) 
                        return true
                    }
                }
                this.setState({error: true})
            } else { this.setState({ data: jsonResponse, isLoading: false }) }
        })
    }

    loadingData(dataNames){ 
        return(
            <div className="loading-data">
                <div classname="loading_Icon"> 
                </div>
                Récupération des {dataNames}
            </div>
        )
    }

}

export default fetchData