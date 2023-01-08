import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Carousel from './Components/Carousel'
import Accordion from './Components/Accordion'

//Image imports
import mountain from './assets/mountain.jpg'
import workboard from './assets/workboard.jpg'


const Card1 = ({ title, desc, image }) => {
  return (
    <ImageBackground source={image} style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}>
      <View style={{ justifyContent: "center", backgroundColor: "rgba(255,255,255,0.7)", padding: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{title}</Text>
        <Text style={{}}>{desc}</Text>
      </View>
    </ImageBackground>
  )
}

const Card2 = ({ title, desc, image }) => {
  return (
    <ImageBackground source={image} style={{ width: "100%", height: "100%", justifyContent: "center" }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "white" }}>{title}</Text>
      <Text style={{ textAlign: "center", color: "white" }}>{desc}</Text>
    </ImageBackground>
  )
}
export default function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>This is ContentCondenser</Text>
      <Text style={styles.desc}>Authors: Emil Bertholdsson & Linus Karlsson</Text>
      <Accordion
        items={[
          {
            title: "Home",
            content: <Text>Hej</Text>,
          },
          {
            title: "About",
            content:
              <View>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
                <Text>Emil är bäst</Text>
              </View>,
          },
          {
            title: "Our products",
            content: <Text>Jag ska slå Linus i codewars</Text>,
          },
          {
            title: "Contact",
            content:
              < ScrollView >
                <View contentContainerStyle={styles.container}>
                  <Text style={styles.title}>This is the Carousel</Text>
                  <Carousel height={300}>
                    <Card1 image={mountain} title="The carousel" desc="Swipe the carousel to move it!" />
                    <Card1 image={workboard} title="Wow!, that was smooth" desc="" />
                    <Text style={{ textAlign: 'center', paddingHorizontal: 15 }}>You can put what you want in the carousel. Even simple text components.</Text>
                  </Carousel>

                  <Text style={styles.desc}>You can modify the carousels width and height!</Text>
                  <Carousel height={200} width={200}>
                    <Card2 image={mountain} title="Customizable" desc="Modify the size of the slides!" />
                    <Card2 image={workboard} title="Wow!, that was smooth" desc="" />
                  </Carousel>

                  <Carousel>
                    <Card2 image={mountain} title="Customizable" desc="Modify the size of the slides!" />
                    <Card2 image={workboard} title="Wow!, that was smooth" desc="" />
                  </Carousel>
                </View>
              </ScrollView >,
          },
        ]} />
    </ScrollView>
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
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    fontSize: 15,
  },

});
