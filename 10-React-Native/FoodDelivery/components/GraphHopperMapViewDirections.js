import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import isEqual from 'lodash.isequal';

class GraphHopperMapViewDirections extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coordinates: null,
            distance: null,
            duration: null,
        };
    }

    componentDidMount() {
        this._mounted = true;
        this.fetchAndRenderRoute();
    }

    componentWillUnmount() {
        this._mounted = false;
    }
    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.origin, this.props.origin) || !isEqual(prevProps.destination, this.props.destination) || !isEqual(prevProps.waypoints, this.props.waypoints) || !isEqual(prevProps.mode, this.props.mode)) {
            if (this.props.resetOnChange === false) {
                this.fetchAndRenderRoute(this.props);
            } else {
                this.resetState(() => {
                    this.fetchAndRenderRoute(this.props);
                });
            }
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     if ((nextProps.origin != this.props.origin) || (nextProps.destination != this.props.destination) || !isEqual(nextProps.waypoints, this.props.waypoints)) {
    //         this.resetState(this.fetchAndRenderRoute);
    //     }
    // }


    resetState = (cb = null) => {
        this._mounted && this.setState({
            coordinates: null,
            distance: null,
            duration: null,
        }, cb);
    }

    decode(t, e) {
        for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) {
            a = null, h = 0, i = 0;
            do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
            n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0;
            do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
            o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c]);
        }

        return d = d.map(function (t) {
            return {
                latitude: t[0],
                longitude: t[1],
            };
        });
    }

    fetchAndRenderRoute = () => {

        let {
            origin,
            destination,
            waypoints,
            apikey,
            onReady,
            onError,
            mode = 'driving',
            language = 'en',
            url
        } = this.props;

        if (origin.latitude && origin.longitude) {
            origin = `${origin.latitude},${origin.longitude}`;
        }

        if (destination.latitude && destination.longitude) {
            destination = `${destination.latitude},${destination.longitude}`;
        }

        if (!waypoints || !waypoints.length) {
            waypoints = '';
        } else {
            waypoints = waypoints
                .map(waypoint => (waypoint.latitude && waypoint.longitude) ? `${waypoint.latitude},${waypoint.longitude}` : waypoint)
                .join('|');

        }

        this.fetchRoute(origin, waypoints, destination, apikey, mode, language, url = "https://graphhopper.com/api/1")
            .then(result => {
                if (!this._mounted) return;
                this.setState(result);
                onReady && onReady(result);
            })
            .catch(errorMessage => {
                this.resetState();
                console.warn(`GraphHopperMapViewDirections Error: ${errorMessage}`); // eslint-disable-line no-console
                onError && onError(errorMessage);
            });
    }

    fetchRoute = (origin, waypoints, destination, apikey, mode, language, propurl) => {
        // const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&waypoints=${waypoints}&destination=${destination}&key=${apikey}&mode=${mode}&language=${language}`;

        const url = `${propurl}/route?point=${origin}&point=${destination}&key=${apikey}&optimize=true&vehicle=car&debug=true`

        // console.log('graph hopper url ==> ' + url);
        return fetch(url)
            .then(response => response.json())
            .then(json => {

                // console.log(JSON.stringify(json, null, 2));
                if (json.status !== 'OK' && !json.paths) {
                    const errorMessage = json.error_message || 'invalid response';
                    return Promise.reject(errorMessage);
                }

                if (json.paths) {

                    const route = json.paths[0];

                    return Promise.resolve({
                        distance: route.legs.reduce((carry, curr) => {
                            return carry + curr.distance.value;
                        }, 0) / 1000,
                        duration: route.legs.reduce((carry, curr) => {
                            console.log(route);
                            return carry + curr.duration.value;
                        }, 0) / 60,
                        coordinates: this.decode(route.points),
                    });

                } else {
                    return Promise.reject();
                }
            });
    }

    render() {
        if (!this.state.coordinates) {
            return null;
        }

        const {
            origin, // eslint-disable-line no-unused-vars
            waypoints, // eslint-disable-line no-unused-vars
            destination, // eslint-disable-line no-unused-vars
            apikey, // eslint-disable-line no-unused-vars
            onReady, // eslint-disable-line no-unused-vars
            onError, // eslint-disable-line no-unused-vars
            mode, // eslint-disable-line no-unused-vars
            language, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;
        return (
            <MapView.Polyline coordinates={this.state.coordinates} {...props} />
        );
    }

}

GraphHopperMapViewDirections.propTypes = {
    origin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        }),
    ]),
    waypoints: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
            }),
        ]),
    ),
    destination: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        }),
    ]),
    apikey: PropTypes.string.isRequired,
    onReady: PropTypes.func,
    onError: PropTypes.func,
    mode: PropTypes.oneOf(['driving', 'bicycling', 'transit', 'walking']),
    language: PropTypes.string,
    url: PropTypes.string,
    resetOnChange: PropTypes.bool,
};

export default GraphHopperMapViewDirections;