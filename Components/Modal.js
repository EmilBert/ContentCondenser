import React, { useRef, useEffect, useState } from 'react';
import {Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const Modal = (props) => {

//Modal animation state
const [hideModal, setHideModal] = useState(!props.isOpen);

const fadeAnim = useRef(new Animated.Value(0)).current;
const translateAnim = useRef(new Animated.Value(30)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateAnim, {
        useNativeDriver: true,
        toValue: 0,
        duration: 300,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 300,
    }).start();

    Animated.timing(translateAnim, {
        useNativeDriver: true,
        toValue: 30,
        duration: 300,
    }).start();
  };    

    useEffect(() => {
        if (props.isOpen) {
            setHideModal(false);
            fadeIn();
        } else {
            fadeOut();
            //Set interval to wait for animation to finish before hiding modal
            setTimeout(() => {
                setHideModal(true);
            }
            , 300);
        }
    }, [props.isOpen]);

    
    return (
    <Animated.View style={ !hideModal ? {...styles.background, ...styles.show, opacity: fadeAnim} : {...styles.background, opacity:fadeAnim, ...styles.hide, opacity: fadeAnim}}>
        <Pressable onPress={() => props.handleClose(!props.isOpen)} style={styles.pressableArea}></Pressable>
        <Animated.View style={{...styles.windowHolder, transform:[{translateY:translateAnim}, {perspective: 1000}]}}>
            <View style={{...styles.window, ...props.style}}>
                {props.children}
            </View>
        </Animated.View>
    </Animated.View>  
    );
}
export default Modal;

// Style
const styles = StyleSheet.create({
    pressableArea: {
        width: "100%",
        height: "100%",
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "color: rgba(0, 0, 0, 0.5)",
        flexDirection:'column',
        justifyContent: "center",
        transition: "opacity 0.5s",
    },
    windowHolder: {
        position: "absolute",
        justifyContent: "center",
        margin:30,
    },
    window: {
        width: "100%",
        padding: 30,
        borderRadius: 10,
        backgroundColor: "white",
    },
    show: {
        opacity: 1,
    },
    hide: {
        display: "none",
        opacity: 0,
    },
});