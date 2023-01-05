import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, ImageBackground, ScrollView} from 'react-native';
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
  const [isModalOpen1, setIsModalOpen1] = React.useState(false);
  const [isModalOpen2, setIsModalOpen2] = React.useState(false);

  return (
    <View>


      <Modal handleClose={setIsModalOpen2} isOpen={isModalOpen2} >
        <Card1 image={mountain} title="The carousel" desc="Swipe the carousel to move it!"/>
      </Modal>
    
      
      <Text style={styles.title}>This is CardUtility</Text>
      <Text style={styles.desc}>Authors: Emil Bertholdsson & Linus Karlsson</Text>
      
      <ScrollView style={{overflow:"hidden"}}>
        <View contentContainerStyle = {styles.container}>
          

          <Text style={styles.title}>This is the Carousel</Text>
          <Carousel height={300}>
            <Card1 image={mountain} title="The carousel" desc="Swipe the carousel to move it!"/>
            <Card1 image={workboard} title="Wow!, that was smooth" desc=""/>
            <Text style={{textAlign: 'center', paddingHorizontal: 15}}>You can put what you want in the carousel. Even simple text components.</Text>
          </Carousel>

          <Text style={styles.desc}>You can modify the carousels width and height!</Text>
          <Carousel height={200} width={200}>
            <Card2 image={mountain} title="Customizable" desc="Modify the size of the slides!"/>
            <Card2 image={workboard} title="Wow!, that was smooth" desc=""/>
          </Carousel>

          <Text style={styles.title}>This is the Modal</Text>
          {/*Modal button*/}
          <Pressable onPress={() => setIsModalOpen1(true)}>
            <Text>Press me!</Text>
          </Pressable>

          <Carousel>
            <Card2 image={mountain} title="Customizable" desc="Modify the size of the slides!"/>
            <Card2 image={workboard} title="Wow!, that was smooth" desc=""/>
          </Carousel>

          <Modal handleClose={setIsModalOpen1} isOpen={isModalOpen1}>
            <View style={{width: "100%", backgroundColor: "white", padding: 20, borderRadius: 15}}>
              <Text>Inside of the modal you can put whatever content you want. Useful for extended descriptions for example.</Text>
            </View>
          </Modal>

        </View>
        </ScrollView>
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
  title: {
    textAlign: "center",
    marginTop:10,
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    fontSize: 15,
  },

});
