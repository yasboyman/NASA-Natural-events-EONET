
import React,{useState} from "react";
import GoogleMapReact from 'google-map-react';
import LocationMarker from "../LocationMarker";
import WildfireInfoBox from "../WildfireInfoBox/index";
import VolcanoMarker from "../VolcanoMarker/index";
import KeyForIcons from "../KeyIcons/KeyForIcons";



const  Map = ({eventData, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null)



    const wildFires = eventData.map( ev => {

         if(ev.categories[0].id === 8) {

             return <LocationMarker
                 lat={ev.geometries[0].coordinates[1]}
                 lng={ev.geometries[0].coordinates[0]}
                 onClick={ () =>  setLocationInfo({title: ev.title , id: ev.id})}
             />
         }
         return null;

    });


    const volcanosData = eventData.map( ev => {

        if(ev.categories[0].id === 12) {
            console.log('volcanos: ', ev)
            console.log( 'length', ev.geometries[0].coordinates.length)

            return <VolcanoMarker
                lat={ ev.geometries[0].coordinates.length === 2 ? ev.geometries[0].coordinates[1] : ev.geometries[0].coordinates[0][0][1]  }
                lng={ ev.geometries[0].coordinates.length === 2 ? ev.geometries[0].coordinates[0] : ev.geometries[0].coordinates[0][0][0]    }
            />
        }
        return null;

    })

    return (
        <div className="map">
            { locationInfo && <WildfireInfoBox info={locationInfo} />}
            { <KeyForIcons
                header={'hello'}
                desc={'Goodbye'}
             />}

            <GoogleMapReact
                bootstrapURLKeys={{
                         key: 'AIzaSyAy3wmwCyAzTJ9kdZlAVZ9ilxM5AJfiDD8' }}
                defaultCenter={{
                            lat: -50.3265,
                            lng: -12.8756
                }}
                defaultZoom={ 3 }
            >

                {wildFires}
                {volcanosData}

            </GoogleMapReact>




        </div>
    );
}



export default Map;
