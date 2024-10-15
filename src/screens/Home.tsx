import { Component } from "react";
import { View, Text, Button ,StyleSheet} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>welcome to Home !!</Text>
      <View style ={styles.button}>
      <Button 
        title="Hello Button" 
        onPress={() => alert("Button Pressed!")} 
        color ="red"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container :{
      backgroundColor: "pink",
      flex :1,
      alignItems :"center",
      justifyContent : "center"
    },
    title: {
      color : "#fff"
    },
    button :{
        padding : 5,
        //backgroundColor : "aliceblue"
    }
  
})

export default Home;
