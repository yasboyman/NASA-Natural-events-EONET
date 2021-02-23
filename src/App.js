import {useEffect, useState} from 'react';
import Map from './Components/Map/index';
import axios from 'axios';
import Loader from './Components/Loader/index'
const  App = () => {

    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(

        () => {
            setLoading(true);
            axios.get(url)
                .then(res => {
                        setEventData(res.data.events)
                        setLoading(false)
                    })
        },[]

    )

    const url = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?`





    // const geometriesTitle = eventData.map(x => x.title)
    // const geometriesID = eventData.map(x => x.categories[0].id)
    // const geometriesData =  eventData && eventData.map(x => x.geometries.map( geo => geo.coordinates))
    console.log('DATA from STATE:', eventData)


    return (
    <div className="App">
        <header className={'header'}>
            <h1 > Welcome to the Wildfire Tracker...</h1>
        </header>


        {!loading ? <Map eventData={eventData} /> : <Loader />}






    </div>
  );
}

export default App;
