import React, {useEffect, useState} from 'react';
import Map from './Components/Map/index';
import axios from 'axios';
import Loader from './Components/Loader/index'
import KeyForIcons from "./Components/KeyIcons/KeyForIcons";



const  App = () => {

    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [counter, setIncrement] = useState(0);

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



    return (
    <div className="App" data-test={'app-component'}>
        <header className={'header'}>
            <h1 className={'title'}
                 data-test={'title-component'} > Welcome to the Wildfire Tracker...</h1>
        </header>
        {/*<button*/}
        {/*    id={'increment-btn'}*/}
        {/*onClick={ () => setIncrement(counter + 1)}*/}
        {/*>Increment</button>*/}
        {/*<button*/}
        {/*    id={'decrement-btn'}*/}
        {/*    onClick={ () => setIncrement(counter - 1)}*/}
        {/*>Increment</button>*/}
        {/*<div id={'counter-value'}>{counter}</div>*/}


        {!loading ? <Map eventData={eventData} /> : <Loader />}

    </div>
  );
}

export default App;
