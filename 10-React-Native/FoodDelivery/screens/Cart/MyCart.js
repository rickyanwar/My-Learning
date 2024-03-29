import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { IconButton, StepperInput, FooterTotal } from '../../components';
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../constants';

import { SwipeListView } from 'react-native-swipe-list-view';

const MyCart = ({ navigation }) => {

    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)

    //handler section
    function updateQuantityHandeler(newQty, id) {
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? { ...cl, qty: newQty } : cl
        ))

        setMyCartList(newMyCartList)
    }

    function removeMyCartHandler(id) {
        let newMyCartList = [...myCartList];
        const index = newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index);
        setMyCartList(newMyCartList);
    }

    function renderCartList() {
        return (
            <SwipeListView
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Food Image */}
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image
                                source={data.item.image}
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',
                                    top: 10
                                }}
                            />
                        </View>
                        {/* Food Info */}
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
                            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>${data.item.price}</Text>
                        </View>
                        {/* Quantity */}
                        <StepperInput
                            containerStyle={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => updateQuantityHandeler(data.item.qty + 1, data.item.id)}
                            onMinus={() => {
                                if (data.item.qty > 1) {
                                    updateQuantityHandeler(data.item.qty - 1, data.item.id)
                                }
                            }}
                        />
                    </View>

                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerSyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => {
                            removeMyCartHandler(data.item.id)
                        }}
                    />
                )}

            />
        )
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Render Cart List */}
            {renderCartList()}

            {/* Footer */}
            <FooterTotal

                subTotal={37.97}
                shippingFee={0.00}
                total={37.97}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default MyCart;