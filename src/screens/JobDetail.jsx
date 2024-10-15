import React from "react";
import {View , Text , StyleSheet} from "react-native";

const JobDetail =()=>{
  return(
    <View style={styles.container}>
        <Text>
            Job Screen
        </Text>
    </View>
  )
}

export default JobDetail;

const styles = StyleSheet.create({
    container :{
     backgroundColor : "red"
    }
})