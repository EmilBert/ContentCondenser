import React, { useRef, useEffect, useState } from 'react';
import { Text, Animated, Pressable, StyleSheet, View, ScrollView, Dimensions, SafeAreaView, Image } from 'react-native';

const Carousel = ({ children, width, height }) => {
    const [cardWidth, setCardWidth] = useState(Dimensions.get('window').width * 0.8);
    const [cardHeight, setCardHeight] = useState(Dimensions.get('window').height * 0.7);
    const [scrollInset, setScrollInset] = useState(Dimensions.get('window').width * 0.1 - 10);
    
    if(!cardWidth || !cardHeight || !scrollInset) return(<View></View>);

    const scrollViewRef = useRef();
    
    useEffect(() => {
        setCardWidth(width);
        setCardHeight(height);
        setScrollInset((Dimensions.get('window').width - width) / 2);
        
        //ScrollTo the first item on start
        scrollViewRef.current.scrollTo({ x: -scrollInset, y: 0, animated: false });

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
                snapToInterval={cardWidth + 10} // Calculate the size for a card including marginLeft and marginRight
                directionalLockEnabled={true}
                snapToAlignment={Platform.OS === 'ios' ? 'center' : 'start'} // Snap to the center of the card (only for iOS)
                contentInset={{ // iOS ONLY
                    top: 0,
                    left: scrollInset || Dimensions.get('window').width * 0.1 - 10, //SPACING_FOR_CARD_INSET, // Left spacing for the very first card
                    bottom: 0,
                    right: scrollInset || Dimensions.get('window').width * 0.1 - 10, //SPACING_FOR_CARD_INSET // Right spacing for the very last card
                }}
                contentContainerStyle={{ // contentInset alternative for Android
                    paddingHorizontal: Platform.OS === 'android' ? scrollInset : 0 // Horizontal spacing before and after the ScrollView
                }}
                style={{ ...styles.carousel, paddingTop: 5 }}>

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