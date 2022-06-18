import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform
} from 'react-native';
import * as Location from 'expo-location';
// import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { IconButton, GraphHopperMapViewDirections } from '../../components';
import { FONTS, COLORS, icons, images, SIZES, dummyData, constants } from '../../constants';
import { utils } from "../../utils"
import { orderByDistance } from 'geolib';
const Map = ({ navigation }) => {

    const mapView = React.useRef();
    const [region, setRegion] = React.useState(null);
    const [toLoc, setToLoc] = React.useState(null);

    const [fromLoc, setFromLocation] = React.useState({
        latitude: 10,
        longitude: 10
    });


    const [position, setPosition] = React.useState({
        latitude: -8.6529147619,
        longitude: -8.6529147619,
    });


    React.useEffect(() => {

        let destination = {
            latitude: -8.6529147619,
            longitude: 116.533279048,
        };

        // SET lOCATION ORIGIN
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setFromLocation(location.coords)
            let initialRegion = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.10,
                longitudeDelta: 0.10
            }
            setRegion(initialRegion)

            //ORDER DISTANCE
            // let orderLocation = orderByDistance({ latitude: fromLoc.latitude, longitude: fromLoc.longitude }, [...dummyData.RandomMarker]);
            // console.log(fromLoc)
            // console.log('order location');
            // console.log(orderLocation);

        })();

        setToLoc(destination)

    }, [])



    //WATCH POSTION
    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            foregroundSubscrition = Location.watchPositionAsync(
                {
                    // Tracking options
                    accuracy: Location.Accuracy.High,
                    distanceInterval: 10,
                },
                location => {

                    let cor = {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,

                    }
                    setPosition(cor);
                }
            )
        })();

    }, []);

    function renderMap() {
        return (
            <MapView

                ref={mapView}
                style={{
                    flex: 1
                }}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                showsMyLocationButton={true}
                showsScale={true}

            >
                {
                    dummyData.RandomMarker && dummyData.RandomMarker.map((value, index) => {
                        return (<Marker
                            key={`Marker-${index}`}
                            title={`Marker-${index}`}
                            description={`Desc-${value.latitude}`}
                            coordinate={value}
                            tracksViewChanges={true}
                        />)
                    })
                }
                {
                    position && <Marker
                        key={'positionLoc'}
                        coordinate={position}

                    >
                        <Image source={icons.bus}
                            style={{ height: 40, resizeMode: "contain" }}
                        />
                    </Marker>


                }
                {
                    fromLoc && <Marker
                        key={'Postition'}
                        coordinate={fromLoc}
                        tracksViewChanges={true}
                        draggable={true}
                        onDragEnd={(e) => setFromLocation(e.nativeEvent.coordinate)}
                    />
                }
                {
                    toLoc && <Marker
                        key={'FromLoc'}
                        coordinate={toLoc}
                        tracksViewChanges={true}
                        draggable={true}
                        onDragEnd={(e) => {
                            setFromLocation(e.nativeEvent.coordinate)
                            console.log(e.nativeEvent.coordinate)
                        }}
                    />
                }

                <GraphHopperMapViewDirections
                    strokeWidth={10}
                    strokeColor="#FF6C44"
                    origin={fromLoc}
                    destination={toLoc}
                    apikey="de77d174-2102-450b-aac0-b06b4c2e7c65"
                    onReady={
                        result => console.log(result)
                    }
                />
            </MapView>
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Map */}
            {renderMap()}
            {/* Header */}
            {/* Footer/Info */}
        </View>
    )
}

export default Map;