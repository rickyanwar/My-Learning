import React from 'react';

import { Text, View, Image } from 'react-native';
import FlexBox from './FlexBox';
import PositionReacNative from './PositionReacNative';
import PropsDinamis from './src/pages/propsDinamis';
import StateDinamis from './src/pages/StateDinamis/index';
import Communication from './src/pages/Communication';
import Cart from './src/components/Cart';
import Product from './src/components/Product';
const App = () => {
  return (
    <View >
      {/* <Cart /> */}
      {/* <Photo />
      <FlexBox />
      <PropsDinamis />
      <StateDinamis /> */}
      {/* <PositionReacNative /> */}
      {/* <Product /> */}
      <Communication />
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