import React, { useRef, useEffect, useState } from 'react';
import { Text, Animated, Pressable, StyleSheet, View, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';

import expand from '../assets/expand.png'

const AccordionItem = ({ open, title, content, onClick, index }) => {
    return (
        <View>
            <Pressable onPress={() => { onClick(index); }}>
                <View style={styles.titlePressable}>
                    <Text style={styles.title}>{title}</Text>
                    <Image style={{ resizeMode: "cover", height: "auto" }} source={expand}></Image>
                </View>
            </Pressable>
            {open == index ? content : null}
        </View>
    );
}

const Accordion = ({ items, numbered = false }) => {
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
                    onClick={handleClick}
                />
            )}
        </View>
    );
}
export default Accordion;

// Style
const styles = StyleSheet.create({
    titlePressable: {
        padding: 12,
        borderWidth: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    title: {
        textAlignVertical: "center",
        fontSize: 25,
    },
    rotate: {
        transform: rotateX(180),
    }
});