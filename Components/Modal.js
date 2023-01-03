import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Modal = ({children}) => {
    return (
        <Pressable style={{backgroundColor: "green"}}>
        <View>
            {children}
        </View>  
       </Pressable>
    );
}
export default Modal;