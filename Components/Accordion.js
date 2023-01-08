
import React, { useRef, useEffect, useState} from 'react';
import {UIManager, Text, Animated, Pressable, StyleSheet, View, Image, LayoutAnimation } from 'react-native';
import expand from '../assets/expand.png'


if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}


const AccordionItem = ({ open, title, content, onClick, index, containerStyle, textStyle }) => {
    
    const [hideContent, setHideContent] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Animation functions
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 1,
            duration: 300,
        }).start();  
    };
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 0,
            duration: 300,
        }).start();
    };

    // Start animation when modal is opened or closed
    useEffect(() => {
        if (open == index) {
            setHideContent(false);
            fadeIn();
        } else {
            fadeOut();
            //Set interval to wait for animation to finish before hiding modal
            setTimeout(() => setHideContent(true), 200);
        }
    }, [open, index]);
    return (
        <View>
            <Pressable onPress={() => { onClick(index)}}>
                <View style={{ ...styles.titlePressable, ...containerStyle }}>
                    <Text style={{ ...styles.title, ...textStyle }}>{title}</Text>
                    <Image style={open == index ? { tintColor: "gray", resizeMode: "cover", height: "auto", ...styles.rotate } : { tintColor: "gray", resizeMode: "cover", height: "auto" }} source={expand}></Image>
                </View>
            </Pressable>

            <View onPress={LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)} style={!hideContent ? {overflow:"hidden"} : {overflow:"hidden",height: 0 }}>
                <Animated.View style={open != index ? {width:"100%", opacity:fadeAnim, position:"absolute"} : {width:"100%", opacity:fadeAnim}  }>
                    {content}
                </Animated.View>
            </View>
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
        <View style={{borderBottomColor:"lightgrey", borderBottomWidth:1}}>
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