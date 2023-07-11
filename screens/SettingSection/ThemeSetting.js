import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from 'react';
import { colors } from "../config/theme";


const ThemeSetting = () => {

    
    return (
        
        <View style={[styles.mainContainer,{width: "100%"}]}>
            <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 35, }}>User</Text>
        <View style={styles.firstContainer}>
            <View style={styles.insideText}>
                <Text style={{fontSize: 18}}>Name</Text>
                 <TouchableOpacity onPress={() =>{}} style={styles.radioButton}>
                    <View style = {styles.radioButtonIcon}/>
                 </TouchableOpacity>
            </View>
            </View>
 
             
        </View>
       

       
    
    )
}
export default ThemeSetting;

const styles = StyleSheet.create({

    mainContainer: {
        paddingLeft: 30,
        paddingRight: 30
     },
     radioButton:{
         height: 20,
         width: 20,
         backgroundColor: "#F8F8F8",
         borderRadius: 10,
         borderWidth: 1,
         borderColor: "#E6E6E6",
         alignItems: "center",
         justifyContent: "center"
     },
     radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
     },

    firstContainer: {
       backgroundColor: "white",
       height: 60,
       width: "100%",
       borderTopLeftRadius: 40,
       borderTopRightRadius: 40,
       marginTop: 20
       
    },

    secondContainer: {
        backgroundColor: "white",
        height: 60,
        width: "100%",
        marginTop: 2
        
     },

    thirdContainer: {
        backgroundColor: "white",
        height: 60,
        width: "100%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginTop: 2
        
     },
    insideText: {
        flexDirection: "row" , 
        justifyContent: "space-between",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft:15,
        marginRight: 15,
       
    }
})