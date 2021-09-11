import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function Map (props) {
    const centerLoc = [props.lat, props.lng];
    return (
        <MapContainer
            style={{ height: "50vh", width: "100%" }}
            center={centerLoc}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={centerLoc}
            ></Marker>
        </MapContainer>
    );
};