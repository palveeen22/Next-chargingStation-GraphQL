import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { TChargeStation } from '@/@types';

type TProps = {
    data: any
}

const LocationCard: React.FC<TProps> = ({ data }) => {

    // Check if data is not empty and has coordinates
    const hasValidData = data && data.length > 0 && data[0].coordinates && data[0].coordinates.coordinates.length === 2;

    // Extracting coordinates from the data if valid
    const lat = hasValidData ? data[0].coordinates.coordinates[1] : 106.8;
    const lng = hasValidData ? data[0].coordinates.coordinates[0] : -6.22;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API || "Key_Access"
    })

    const containerStyle = {
        width: '900',
        height: '400px'
    };

    const center = {
        lat: lat,
        lng: lng
    };

    const [map, setMap] = React.useState<google.maps.Map | null>(null)

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [center])

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <MarkerF position={center}></MarkerF>
        </GoogleMap>
    ) : <></>
}

export default React.memo(LocationCard)