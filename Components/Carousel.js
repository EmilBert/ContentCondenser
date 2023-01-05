import React, { useRef, useEffect, useState } from 'react';
import { Text, Animated, Pressable, StyleSheet, View, ScrollView, Dimensions, SafeAreaView, Image } from 'react-native';

let CARD_WIDTH = Dimensions.get('window').width * 0.8;
let CARD_HEIGHT = Dimensions.get('window').height * 0.7;
let SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

const Carousel = ({children, width, height}) => {
    //Scrollview ref
    const scrollViewRef = useRef();

    CARD_WIDTH = width || CARD_WIDTH;
    CARD_HEIGHT = height || CARD_HEIGHT;
    SPACING_FOR_CARD_INSET =  (Dimensions.get('window').width - width)/2  || SPACING_FOR_CARD_INSET;

    useEffect(() => {
        //ScrollTo the first item on start
        scrollViewRef.current.scrollTo({ x: -SPACING_FOR_CARD_INSET, y: 0, animated: false});
    }, []);

    return (
        <SafeAreaView style={{...styles.container, height:CARD_HEIGHT+30}}>
            <ScrollView 
                ref={scrollViewRef}
                horizontal // Change the direction to horizontal
                pagingEnabled // Enable paging
                decelerationRate={0.9} // Disable deceleration
                width = {"100%"}
                disableIntervalMomentum={true}
                snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
                snapToAlignment={Platform.OS === 'ios' ? 'center' : 'start'} // Snap to the center
                directionalLockEnabled={true}
                contentInset={{ // iOS ONLY
                    top: 0,
                    left: SPACING_FOR_CARD_INSET, //SPACING_FOR_CARD_INSET, // Left spacing for the very first card
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET, //SPACING_FOR_CARD_INSET // Right spacing for the very last card
                }}
                contentContainerStyle={{ // contentInset alternative for Android
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0 // Horizontal spacing before and after the ScrollView
                }}
                style={{...styles.carousel, paddingTop:5}}>
                
                {children.map((item, index) => 
                    <View key={index} alt={index} style={{...styles.carouselItem, width: CARD_WIDTH, height: CARD_HEIGHT}}>
                        <View style={styles.carouselItemInner}>
                            {item}
                            
                        </View>
                    </View>
                )}   
            </ScrollView>
        </SafeAreaView>
    );
}
export default Carousel;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        scrollBarWidth: 0,
    },
    carousel: {
    
        
    },
    carouselItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.23,
        shadowRadius: 4,
        elevation: 15,
    },
    carouselItemInner: {
        overflow: 'hidden',
        borderRadius: 15,
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselItemText: {
        color: 'white',
        fontSize: 20,
    },
});