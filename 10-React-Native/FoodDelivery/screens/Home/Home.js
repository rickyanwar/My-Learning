import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';

import { HorizontalFoodCard, VerticalFoodCard } from "../../components"
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, icons, FONTS, dummyData } from '../../constants';
import FilterModal from './FilterModal';
const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text
                        style={{ color: COLORS.primary, ...FONTS.body3 }}
                    >Show All</Text>
                </TouchableOpacity>
            </View>
            {/* Content */}
            {children}
        </View>
    )
}

const Home = () => {
    const navigation = useNavigation();
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [popular, setPopular] = React.useState([]);
    const [recommends, setRecommends] = React.useState([])
    const [menuList, setMenuList] = React.useState([]);
    const [showFilterModal, setShowFilterModal] = React.useState(false)

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    function handleChangeCategory(categoryId, menuTypeId) {
        //Retrive Popular Menu
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")
        //Retrive Recomended Menu
        let selectedRecommended = dummyData.menu.find(a => a.name == "Recommended")
        //Find the menu on base on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
        //set pupular menu
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
        //Set the reommmended menu based on the categoryId
        setRecommends(selectedRecommended?.list.filter(a => a.categories.includes(categoryId)))

        //Set the menubased on categoryId
        setMenuList(selectedMenu?.list.filter(
            a => a.categories.includes(categoryId)
        ))

    }


    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 28,
                        width: 28,
                        tintColor: COLORS.black
                    }}
                />
                {/* Text Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="search food"
                />
                <TouchableOpacity
                    onPress={() => setShowFilterModal(true)}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                    {/* Filter Button */}
                </TouchableOpacity >
            </View >
        )
    }

    function renderMenuType() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                            }}
                        >{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderRecomendedSection() {
        return (
            <Section title="Recommended"
                onPress={() => console.log('show all recomended')}
            >
                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == recommends.length - 1 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'

                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150
                            }}
                            item={item}
                            onPress={() => console.log('HorizontalFoodCard')}
                        />
                    )}

                />
            </Section>
        )
    }

    function renderPopularSection() {
        return (
            <Section
                title="Popular Near You"
                onPress={() => console.log('ceee')}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                    (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                padding: 18,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 0
                            }}
                            item={item}
                            onPress={() => console.log('Vertical Food Card')}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderFoodCategories() {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) =>
                (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            height: 55,
                            marginTop: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                        }}

                        onPress={() => {
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id, selectedMenuType)
                        }}
                    >
                        <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 50,
                            }}
                        />
                        <Text
                            style={{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderDeliveryTo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                >
                    Delivery To
                </Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>
                        {dummyData?.myProfile?.address}
                    </Text>
                    <Image
                        source={icons.down_arrow}
                        style={{
                            marginLeft: SIZES.base,
                            height: 20,
                            width: 20,
                        }}
                    ></Image>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}

            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }
            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={true}
                ListHeaderComponent={
                    <View >
                        {/* Delivery To */}
                        {renderDeliveryTo()}
                        {/* Categories */}
                        {renderFoodCategories()}
                        {/* Popular */}
                        {renderPopularSection()}
                        {/* Recomended */}
                        {renderRecomendedSection()}
                        {/* Menu TYpe */}
                        {renderMenuType()}
                    </View>
                }
                renderItem={
                    ({ item, index }) => {
                        return (
                            <HorizontalFoodCard
                                containerStyle={{
                                    height: 130,
                                    alignItems: 'center',
                                    marginHorizontal: SIZES.padding,
                                    marginBottom: SIZES.radius
                                }}
                                imageStyle={{
                                    marginTop: 20,
                                    height: 110,
                                    width: 110
                                }}
                                item={item}
                                onPress={() =>
                                    navigation.navigate('FoodDetail')}
                            />
                        )
                    }
                }

            //for section not hide navigation
            // ListFooterComponent={
            //     <View style={{ height: 200 }} />
            // }
            />

        </View>
    )
}

export default Home;