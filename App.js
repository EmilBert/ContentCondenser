import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import Carousel from './Components/Carousel';
import Accordion from './Components/Accordion';

//Image imports
import mountain from './assets/mountain.jpg';
import workboard from './assets/workboard.jpg';
import accordion from './assets/accordion.jpg';


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

const Card2 = ({ title, desc, backgroundColor }) => {
  return (
    <View style={{ width: "100%", height: "100%", padding: 15, justifyContent: "center", backgroundColor:backgroundColor }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color: "white" }}>{title}</Text>
      <Text style={{ textAlign: "center", color: "white" }}>{desc}</Text>
    </View>
  )
}
export default function App() {
  return (
    <View style={{paddingBottom: 60}}>
      <View style={{marginTop:40, padding:20, borderColor: "navy", borderBottomWidth:2}}>
        <Text style={styles.title}>ContentCondenser</Text>
        <Text style={styles.desc}>Authors: Emil Bertholdsson & Linus Karlsson</Text>
      </View>
    <ScrollView style={{marginBottom:100}}>

      
      <Text style={styles.componentTitle}>The Accordion</Text>
      

      <Accordion
        items={[
          {
            title: "About",
            content:
              <View style={{padding:20}}>
                <Text>You just interacted with our accordion menu.</Text>
                <Text>In this menu, you can put any content you want. For example, take a look at the next accordion tab.</Text>
              </View>,
          },
          {
            title: "Customize the content",
            content: 
              <View style={{padding:20}}>
                <Image source={accordion} style={{resizeMode:"contain", height:500, width: "100%", marginBottom:20}}/>
                <Text style = {{fontSize: 22}}>Add whatever content you would like!</Text>
                <Text style = {{paddingTop: 10}}>You can fill your accordion content with whatever components you'd like. You can have subpages like this, or nested submenus like in the next example.</Text>
              </View>
          },
          {
            title: "Nested components",
            content:
            <Accordion
            numbered={true}
            textStyle={{fontSize: 15}}
            items={[
              {
                title: "Accordion inside an accordion",
                content:
                  <View style = {{padding: 20}}>
                    <Text>Ain't that something!</Text>
                  </View>
              },
              {
                title: "Wow this Accordion also supports numbering!",
                content:
                  <View style = {{padding: 20}}>
                    <Text>Just set numbered=true!</Text>
                  </View>
              },
              {
                title: "Style the Accordion to your liking!",
                content:
                  <View style = {{padding: 20}}>
                    <Text>With the props containerStyle and textStyle you can pass your style to the component!</Text>
                  </View>
              }
            ]}
            />
          }
        ]} />
        <View contentContainerStyle={styles.container}>
        <Text style={styles.componentTitle}>The Carousel</Text>
          <Carousel height={300}>
            <Card1 image={mountain} title="The carousel" desc="Swipe the carousel to move it!" />
            <Card1 image={workboard} title="Wow!, that was smooth" desc="" />
            <Text style={{ textAlign: 'center', paddingHorizontal: 15 }}>You can put what you want in the carousel. Even simple text components.</Text>
          </Carousel>

          <Text style={styles.desc}></Text>
          <Carousel height={150} width={200}>
            <Card2 backgroundColor={"navy"} title="Customizable" desc="Modify the size of the slides!" />
            <Card2 backgroundColor={"blue"} title="" desc="Height and width are seperate variables." />
            <Card2 backgroundColor={"cornflowerblue"} title="Thanks!" desc="That's it for this demo application." />
          </Carousel>
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
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
  },
  componentTitle: {
    padding: 12,
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    fontSize: 15,
  },

});
