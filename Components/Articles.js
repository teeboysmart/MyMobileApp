import moment from 'moment';
import React from 'react'
import { View, StyleSheet, Text,  Image, Pressable , } from 'react-native'
import * as WebBrowser from 'expo-web-browser';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Article = (props , style) => {
    const navigation = useNavigation();

    
   

    return (
        <Pressable style={styles.container} onPress={() => {
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
        <Image source={{uri: props.urlToImage}} style={styles.image}/>

        <View style={{padding: 20}}>
        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
        <Text numberOfLines={3} style={styles.description}>{props.description}</Text>
        <View style={styles.data}>
       
         <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
         </View>

         <View style={styles.data2}>
         <Text style={styles.heading}>by: <Text  numberOfLines={3} style={styles.author}>{props.author}</Text></Text>
         <Text style={styles.date}>{moment(props.publishedAt).format("MMM DD YY")}</Text>
         </View>

         </View>

         
       

     

         
     </Pressable>
 )
}

const width  = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;




export default Article;

const styles = StyleSheet.create({
    container: {
        height: height * 0.40,
       width: width * 0.7,
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginLeft: 20,
        marginTop: 5
        
    },
    title: {
       fontSize:  19,
       fontWeight: '600',
       marginTop: -3,
      
    },
    description: {
         fontSize: 16,
         fontWeight: "400",
         marginTop: 2
    },
    data: {
       marginTop: 2
    },
    data2: {
        marginTop: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    author: {
       fontWeight: "bold",
       fontSize: 18,
    },
    date: {
       fontWeight: "bold",
       color: "#e63946",
       fontSize: 18
    },
    source: {
      color: "#e63946",
      fontWeight: "bold",
      fontSize: 18
    },
    image: {
        height: 100,
        width:"100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        
        
    }
})
