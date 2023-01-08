
import React, { useRef, useEffect, useState } from 'react';
import { UIManager, FlatList, Text, Animated, Pressable, StyleSheet, View, Image, LayoutAnimation } from 'react-native';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
import expand from '../assets/expand.png'

const AccordionItem = ({ open, title, content, onClick, index, containerStyle, textStyle }) => {

    const animationController = useRef(new Animated.Value(0).current);

    const toggleAnimation = {
        duration: 300,
        update: {
            duration: 300,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut,
        },
        delete: {
            duration: 300,
            property: LayoutAnimation.Properties.opacity,
            type: LayoutAnimation.Types.easeInEaseOut,
        },
    }


    const toggleItem = () => {
        const config = {
            duration: 300,
            toValue: index == open ? 0 : 1,
            useNativeDriver: true,
        };
        console.log("toggleItem");
        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(toggleAnimation);

    }

    return (
        <View>
            <Pressable onPress={() => { onClick(index); toggleItem }}>
                <View style={{ ...styles.titlePressable, ...containerStyle }}>
                    <Text style={{ ...styles.title, ...textStyle }}>{title}</Text>
                    <Image style={open == index ? { tintColor: "gray", resizeMode: "cover", height: "auto", ...styles.rotate } : { tintColor: "gray", resizeMode: "cover", height: "auto" }} source={expand}></Image>
                </View>
            </Pressable>

            <Animated.View style={open == index ? { opacity: 1, height: animationController.current } : { opacity: 0, height: 0 }}>
                <View>
                    {content}
                </View>
            </Animated.View>
        </View>
    );
}

const Accordion = ({ items, containerStyle, textStyle, numbered = false }) => {
    // No accordion menu open by default, set idx to -1
    const [openIndex, setOpenIndex] = useState(-1);

    // Update state on click of any accordion item
    const handleClick = (index) => {
        openIndex != index ? setOpenIndex(index) : setOpenIndex(-1);
    }
    return (
        <View>
            {items.map((item, index) =>
                <AccordionItem
                    open={openIndex}
                    title={numbered ? index + 1 + ". " + item.title : item.title}
                    content={item.content}
                    index={index}
                    key={index}
                    onClick={handleClick}
                    containerStyle={containerStyle}
                    textStyle={textStyle}
                />
            )}
        </View>
    );
}
export default Accordion;

// Style
const styles = StyleSheet.create({
    titlePressable: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        textAlignVertical: "center",
        padding: 12,
        borderTopWidth: 1,
        borderColor: "lightgrey",
    },
    title: {
        fontSize: 25
    },
    rotate: {
        transform: [{ rotateX: '180deg' }],
    }
});