import React, { useRef, useEffect, useState } from 'react';
import { Text, Animated, Pressable, StyleSheet, View, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';

const Accordion = ({ items }) => {

    return (
        <View>
            {items.map((item, index) =>
                <Text>item[0]</Text>
            )}
        </View>
    );
}

export default Accordion;