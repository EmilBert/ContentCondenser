import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Modal from './Components/Modal'
import Carousel from './Components/Carousel'

//Image imports
import mountain from './assets/mountain.jpg'
import workboard from './assets/workboard.jpg'


const Card1 = ({ title, desc, image }) => {
  return (
    <ImageBackground source={image} style={{ width: "100%", height: "100%", justifyContent: "flex-end"}}>
      <View style={{ justifyContent: "center", backgroundColor: "rgba(255,255,255,0.7)", padding:20}}>
        <Text style={{ fontSize: 25, fontWeight:"bold"}}>{title}</Text>
        <Text style={{ }}>{desc}</Text>
      </View>
    </ImageBackground>
  )
}

const Card2 = ({ title, desc, image }) => {
  return (
    <ImageBackground source={image} style={{ width: "100%", height: "100%", justifyContent: "center"}}>
        <Text style={{ fontSize: 25, fontWeight:"bold", textAlign:"center", color:"white"}}>{title}</Text>
        <Text style={{ textAlign:"center", color:"white"}}>{desc}</Text>
    </ImageBackground>
  )
}
export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      <Carousel height={300}>
        <Card1 image={mountain} title="The carousel" desc="Swipe the carousel to move it!"/>
        <Card1 image={workboard} title="Wow!, that was smooth" desc=""/>
        <Text>Hej</Text>
      </Carousel>

      <Carousel height={200} width={200}>
        <Card2 image={mountain} title="Higly Customizable" desc="Modify the size of the slides!"/>
        <Card2 image={workboard} title="Wow!, that was smooth" desc=""/>
        <Pressable onPress={() => setIsModalOpen(true)}>
          <Card2 image={workboard} title="Wow!, that was smooth" desc=""/>
        </Pressable>
      </Carousel>
      
      <Modal handleClose={setIsModalOpen} isOpen={isModalOpen} >
        <Card1 image={mountain} title="The carousel" desc="Swipe the carousel to move it!"/>
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
