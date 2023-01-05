import React, { useRef, useEffect, useState } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';

const Modal = ({ isOpen, handleClose, style, children }) => {

    //Modal animation variables
    const [hideModal, setHideModal] = useState(!isOpen);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateAnim = useRef(new Animated.Value(30)).current;
    const containerSize = useRef()

    // Animation functions
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            useNativeDriver: true,
            toValue: 1,
            duration: 300,
        }).start();

        Animated.timing(translateAnim, {
            useNativeDriver: true,
            toValue: 0,
            duration: 300,
        }).start();
    };
    const fadeOut = () => {
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

    // Start animation when modal is opened or closed
    useEffect(() => {
        if (isOpen) {
            setHideModal(false);
            fadeIn();
        } else {
            fadeOut();
            //Set interval to wait for animation to finish before hiding modal
            setTimeout(() => setHideModal(true), 300);
        }
    }, [isOpen]);

    return (
        <Animated.View style={hideModal ? { ...styles.background, opacity: fadeAnim, ...styles.hide, opacity: fadeAnim } : { ...styles.background, ...styles.show, opacity: fadeAnim }}>
            <Pressable onPress={() => handleClose(!isOpen)} style={styles.pressableArea}></Pressable>
            <Animated.View style={{ ...styles.windowHolder, transform: [{ translateY: translateAnim }, { perspective: 1000 }] }}>
                <View style={{ ...styles.window, ...style }}>
                    {children}
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
        flexDirection: 'column',
        justifyContent: "center",
        transition: "opacity 0.5s",
    },
    windowHolder: {
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
    },
    window: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: "center",
    },
    show: {
        opacity: 1,
    },
    hide: {
        display: "none",
        opacity: 0,
    },
});