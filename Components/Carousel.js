import React, { useRef, useEffect, useState } from 'react';
import { Text, Animated, Pressable, StyleSheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

const Carousel = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal // Change the direction to horizontal
                pagingEnabled // Enable paging
                decelerationRate={0} // Disable deceleration
                snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
                snapToAlignment='center' // Snap to the center
                contentInset={{ // iOS ONLY
                    top: 0,
                    left: SPACING_FOR_CARD_INSET, //SPACING_FOR_CARD_INSET, // Left spacing for the very first card
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET, //SPACING_FOR_CARD_INSET // Right spacing for the very last card
                }}
                contentContainerStyle={{ // contentInset alternative for Android
                    marginHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0 // Horizontal spacing before and after the ScrollView
                }}
                style={styles.carousel}>
                <View style={styles.carouselItem}>
                    <Pressable onPress={() => { }}>
                        <View style={styles.carouselItemInner}>
                            <Text style={styles.carouselItemText}>Item 1</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.carouselItem}>
                    <Pressable onPress={() => { }}>
                        <View style={styles.carouselItemInner}>
                            <Text style={styles.carouselItemText}>Item 1</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.carouselItem}>
                    <Pressable onPress={() => { }}>
                        <View style={styles.carouselItemInner}>
                            <Text style={styles.carouselItemText}>Item 1</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.carouselItem}>
                    <Pressable onPress={() => { }}>
                        <View style={styles.carouselItemInner}>
                            <Text style={styles.carouselItemText}>Item 1</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.carouselItem}>
                    <Pressable onPress={() => { }}>
                        <View style={styles.carouselItemInner}>
                            <Text style={styles.carouselItemText}>Item 1</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.carouselItem}>
                    <Pressable onPress={() => { }}>
                        <View style={styles.carouselItemInner}>
                            <Text style={styles.carouselItemText}>Item 1</Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Carousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carousel: {
        scrollBarWidth: 0,
        overflowX: 'scroll',
    },
    carouselItem: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'blue',
    },
    carouselItemInner: {
        width: 150,
        height: 150,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselItemText: {
        color: 'white',
        fontSize: 20,
    },
});