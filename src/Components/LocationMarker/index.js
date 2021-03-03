import { Icon, InlineIcon } from '@iconify/react';
import {ImFire} from 'react-icons/im'
const LocationMarker = ({lng , lat, onClick}) => {

    return(
        <div className={'location-marker'}  onClick={onClick} >


            <ImFire className={'location-icon'} />



        </div>

    )
}

export default LocationMarker;