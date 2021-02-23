import { Icon, InlineIcon } from '@iconify/react';
import  locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({lng , lat, onClick}) => {

    return(
        <div className={'location-marker'}  onClick={onClick} >

            <Icon icon={locationIcon} className={'location-icon'}/>


        </div>

    )
}

export default LocationMarker;