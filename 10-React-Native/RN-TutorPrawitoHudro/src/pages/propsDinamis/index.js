import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';



const Story = props => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={{ uri: props.image }}
                style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
            />
            <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.title}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View style={{ marginTop: 20 }}>
            <ScrollView horizontal >
                <View style={{ flexDirection: 'row' }}>
                    <Story title="Story 1" image="https://placeimg.com/100/100/tech" />
                    <Story title="Story 2" image="https://placeimg.com/100/100/tech" />
                    <Story title="Story 3" image="https://placeimg.com/100/100/tech" />
                    <Story title="Story 4" image="https://placeimg.com/100/100/tech" />
                    <Story title="Story 5" image="https://placeimg.com/100/100/tech" />
                    <Story title="Story 6" image="https://placeimg.com/100/100/tech" />
                    <Story title="Story 7" image="https://placeimg.com/100/100/tech" />
                    <Story title="3" image="https://placeimg.com/100/100/tech" />
                    <Story title="3" image="https://placeimg.com/100/100/tech" />
                    <Story title="4" image="https://placeimg.com/100/100/tech" />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default PropsDinamis;
