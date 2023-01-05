import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Modal from './Components/Modal'
import Carousel from './Components/Carousel'

export default function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <View style={styles.container}>

      <Carousel width={300} height={200}>

        <ImageBackground style={{width: "100%", height: "100%", justifyContent: "center"}} resizeMode={'cover'} source={require('./assets/adaptive-icon.png')}>
          <Text style={{fontSize: "25", textAlign:"center"}}>1</Text>
        </ImageBackground>
        <Text>2</Text>
        <Text>1</Text>
        <Text>2</Text>
      </Carousel>


      <Pressable onPress={() => setIsModalOpen(true)}>
        <Text>korv</Text>
      </Pressable>

      <Modal handleClose={setIsModalOpen} isOpen={isModalOpen} >

        <Text style={{ fontSize: 32, fontWeight: "bold", }}>Wow what a modal!</Text>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan ex nec ultrices pulvinar. Quisque condimentum augue nisi, et sollicitudin tellus rhoncus a. In ac malesuada erat. In posuere sapien non tortor malesuada, ac imperdiet nibh euismod. Ut placerat urna a ligula maximus, a faucibus ex fringilla. Pellentesque venenatis quis leo in vulputate. Morbi fringilla urna nibh, nec venenatis nunc faucibus quis. Suspendisse eleifend, metus at ullamcorper hendrerit, ipsum tellus tempor neque, in rutrum leo ante vel sapien. Pellentesque efficitur velit sollicitudin magna facilisis, sed pretium magna varius. Donec nec elit sem. Nam pretium eget urna nec vestibulum. Curabitur in ex vehicula leo malesuada faucibus in ut lectus.</Text>
        <Text style={{ fontWeight: "bold", }}> Author Linus Kaksson - mmm kakor   </Text>

        <StatusBar style="auto" />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
