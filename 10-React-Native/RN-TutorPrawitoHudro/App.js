import React from 'react';

import { Text, View, Image } from 'react-native';
import FlexBox from './FlexBox';
import PositionReacNative from './PositionReacNative';
import PropsDinamis from './src/pages/propsDinamis';
import StateDinamis from './src/pages/StateDinamis/index';
const App = () => {
  return (
    <View >
      {/* <View
        style={{
          width: 80, height: 80, backgroundColor: '#0abde3'
        }}>

      </View>
      <Text>
        Ricky
      </Text>
      <Photo></Photo>
      <FlexBox />
      <PositionReacNative />
      <PropsDinamis /> */}
      <StateDinamis />
    </View>
  )
}


const Photo = () => {
  return <Image
    source={{
      uri: "https://placeimg.com/100/100/tech",
    }}
    style={{
      height: 100,
      width: 100,
      borderRadius: 50
    }}
  />
}

export default App;