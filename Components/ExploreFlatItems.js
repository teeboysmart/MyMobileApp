import moment from 'moment';
import React from 'react'
import { View, StyleSheet, Text,  Image, Pressable , } from 'react-native'
import * as WebBrowser from 'expo-web-browser';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../screens/config/theme';



const ExploreFlatItem = (props , style) => {
    const navigation = useNavigation();
    
    let activeColors = colors;
   

    return (
        <Pressable style={[styles.container, {backgroundColor: activeColors.primary}]} onPress={() => {
           navigation.navigate('FullgistPage',
           { 
                urlToImage : props.urlToImage, 
                title: props.title, 
                description: props.description, 
                sourceName: props.sourceName, 
                publishedAt: props.publishedAt, 
                author: props.author,
                content: props.content
           })
           
        }}
        >
         <View style={{flexDirection: 'row', backgroundColor: '#000' }}>
        <Image source={{uri: props.urlToImage}} style={styles.image}/>

        <View style={{padding: 20, width: "75%", backgroundColor: '#000', }}>
        <Text numberOfLines={1} style={[styles.title, {color: activeColors.accent}]}>{props.title}</Text>
       
         </View>
         </View>

         
       

     

         
     </Pressable>
 )
}

const width  = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;




export default ExploreFlatItem;

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: width ,
        backgroundColor: "#fff",
        marginTop: 5,
        alignItems: 'center'
    },
    title: {
       fontSize:  16,
       fontWeight: '600',
       marginTop: -3,
       
      
    },
    data: {
       marginTop: 2
    },
    author: {
       fontWeight: "bold",
       fontSize: 18,
    },
    image: {
        height: 60,
        width:"27%", 
        borderRadius: 5  
    }
})
