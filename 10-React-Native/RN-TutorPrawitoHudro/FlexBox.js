import React, { Component, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

// class FlexBox extends Component {
//     render() {
//         return (
//             <View>
//                 <View style={{
//                     flexDirection: 'row',
//                     backgroundColor: '#d4df9e',
//                     alignItems: 'center',
//                     justifyContent: 'space-between'

//                 }}>
//                     <View style={{ backgroundColor: "#cb0000", width: 50, height: 50 }}></View>
//                     <View style={{ backgroundColor: "#C5D513", width: 50, height: 50 }}></View>
//                     <View style={{ backgroundColor: "#4a4b2f", width: 50, height: 50 }}></View>
//                     <View style={{ backgroundColor: "#cb0000", width: 50, height: 50 }}></View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between'
//                 }}>
//                     <Text>Lorem</Text>
//                     <Text>Lorem</Text>
//                     <Text>Lorem</Text>
//                     <Text>Lorem</Text>
//                     <Text>Lorem</Text>
//                 </View>
//                 <View
//                     style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Image source={{
//                         uri: "https://placeimg.com/100/100/tech"
//                     }}

//                         style={{
//                             width: 100,
//                             height: 100,
//                             borderRadius: 50,
//                             marginRight: 20
//                         }}
//                     />
//                     <View >
//                         <Text style={{ fontSize: 20, fontWeight: "bold", }}>Ricky Anwar</Text>
//                         <Text>1000 Subscribe</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }

// }

const FlexBox = () => {

    const [subscriber, setsubscriber] = useState(200);
    //ON MOUNT
    // useEffect(() => {
    //     console.log('did mount');
    // }, []);
    //ON UPDATE
    // useEffect(() => {
    //     console.log('did update');
    //     setTimeout(() => {
    //         setsubscriber(400);
    //     }, 5000)
    // }, [subscriber]);

    //ON MOUNT AND ON UPDATE IN SINGEL useEffect
    useEffect(() => {
        console.log('did mount');

        setTimeout(() => {
            setsubscriber(400);
        }, 5000);

        return () => {
            console.log('did update');
        };
    }, [subscriber]// fill if on update to show

    );

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#d4df9e',
                alignItems: 'center',
                justifyContent: 'space-between'

            }}>
                <View style={{ backgroundColor: "#cb0000", width: 50, height: 50 }}></View>
                <View style={{ backgroundColor: "#C5D513", width: 50, height: 50 }}></View>
                <View style={{ backgroundColor: "#4a4b2f", width: 50, height: 50 }}></View>
                <View style={{ backgroundColor: "#cb0000", width: 50, height: 50 }}></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text>Lorem</Text>
                <Text>Lorem</Text>
                <Text>Lorem</Text>
                <Text>Lorem</Text>
                <Text>Lorem</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Image source={{
                    uri: "https://placeimg.com/100/100/tech"
                }}

                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginRight: 20
                    }}
                />
                <View >
                    <Text style={{ fontSize: 20, fontWeight: "bold", }}>Ricky Anwar</Text>
                    <Text>{subscriber} Subscribe</Text>
                </View>
            </View>
        </View>
    );
}

export default FlexBox;