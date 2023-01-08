import React, { useRef, useEffect, useState } from 'react';
import { Text, Animated, Pressable, StyleSheet, View, ScrollView, SafeAreaView, Image, Dimensions} from 'react-native';


const Carousel = ({ children, width, height }) => {
    
    let screenWidth = Dimensions.get('window').width;
    let cardWidth   = screenWidth * 0.8;
    let cardHeight  = screenWidth * 0.7;
    let edgeSpacing = screenWidth * 0.1 - 10;

    const scrollViewRef = useRef();

    cardWidth   = width || cardWidth;
    cardHeight  = height || cardHeight;
    edgeSpacing = (Dimensions.get('window').width - width) / 2 || edgeSpacing;

    useEffect(() => {
        //ScrollTo the first item on start
        scrollViewRef.current.scrollTo({ x: -edgeSpacing, y: 0, animated: false });
    }, []);

    return (
        <SafeAreaView style={{ ...styles.container, height: cardHeight + 30 }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                decelerationRate={0.9}
                width={"100%"}
                disableIntervalMomentum={true}
                snapToInterval={cardWidth + 10}
                directionalLockEnabled={true}
                snapToAlignment={Platform.OS === 'ios' ? 'center' : 'start'} 
                contentInset={{ top: 0,left: edgeSpacing,bottom: 0,right: edgeSpacing,}} // for iOS
                contentContainerStyle={{ // for Android
                    paddingHorizontal: Platform.OS === 'android' ? edgeSpacing : 0 
                }}
                style={{ paddingTop: 5 }}>
                {children.map((item, index) =>
                    <View key={index} alt={index} style={{ ...styles.carouselItem, width: cardWidth, height: cardHeight}}>
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
    carouselItem: {
        transform: [{scale: 1}],
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
        elevation: 1,
    },
    carouselItemInner: {
        overflow: 'hidden',
        borderRadius: 15,
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});