import React , {useState, useEffect} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList,StyleSheet } from 'react-native';
import {useFonts} from 'expo-font'
import { navigationContainer} from '@react-navigation/native'
import { colors } from "./config/theme";
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';



const theme = {mode: "dark"}
let activeColors = colors[theme.mode]

let count = 0;

const Choose = ({navigation}) => {

  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]



    let imageUrl = ["https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
   
    
]


const [loaded] = useFonts({
    "Roboto-Black" : require('../assets/fonts/Roboto-Black.ttf'),
    "Roboto-BlackItalic" : require('../assets/fonts/Roboto-BlackItalic.ttf'),
    "Roboto-Italic" : require('../assets/fonts/Roboto-Italic.ttf'),
    "Roboto-Light" : require('../assets/fonts/Roboto-Light.ttf')
   })

   if(!loaded) {
    return null;
   }

   return (
    <SafeAreaView style={{flex:1, backgroundColor: "#151515"}}>

    <View style={{marginTop:50, marginLeft:20}}>

   <TouchableOpacity
   style={{width: 40,height: 40}}
   onPress = {
    () => {

        navigation.navigate("Home")
    }
   }
   >

    <Image  style={{width:20, height:20 , backgroundColor: "white"}} source={require('../assets/images/back-icon2.png')}/>


   </TouchableOpacity>

   <TouchableOpacity onPress={()=>{
    navigation.navigate('choose')
   }}>
   <Text style={{color: "white", marginTop: -45, marginLeft: 300, width: 80, height:80}} >Next</Text>

   </TouchableOpacity>
    </View>



      



    <View style={[styles.cardIcons ]}>
      <TouchableOpacity style= {[styles.iconProfile, styles.icon1, {marginTop: -220, marginRight: 180}]}>
     <Image style={{width:50 , height:50}} source={{uri:imageUrl[count+11]}}/>
      </TouchableOpacity>


      <TouchableOpacity style= {[styles.iconProfile, styles.icon1, {marginTop: -80, marginRight: 120}]}>
     <Image style={{width:50 , height:50}} source={{uri:imageUrl[count+9]}}/>
      </TouchableOpacity>


      <TouchableOpacity style= {[styles.iconProfile, styles.icon1, {marginTop: 50, marginRight: 120}]}>
     <Image style={{width:50 , height:50}} source={{uri:imageUrl[count+9]}}/>
      </TouchableOpacity>
    </View>

   



    </SafeAreaView>
   )




}

const styles = StyleSheet.create({
    name: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: 'center'
    },
    username: {
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center"
    },
    textContainer: {
        position: "absolute",
        top:40,
        width: '100%',
        textAlign: "center",
        paddingBottom:30,
        top: "10%",
        marginTop: 10,
        marginLeft: 50,

    },
    containerBox: {
        fontSize:18,
        alignItems: "center",
        paddingTop: 20,

    },
    compartidos: {
        position: "absolute",
        left: 60,
        fontSize:16,

    },
    num: {
        paddingLeft: 10,
        fontSize:18
    },

    container:{
        height: "80%",
       borderRadius: 50,
       width: "100%",
       flexDirection: "column",
       
    },

    login: {
        flex: 1,
        width: "100%",
        backgroundColor: "white"
    },

    headerIcon: {
        paddingRight:60,

    },
    iconProfile: {
        position: "absolute",
        borderWidth:1,
        borderColor: 'yellow',
        alignItems: "center",
        justifyContent: "center",
        width:80,
        height: 80,
        backgroundColor:"white",
        borderRadius:50,
        shadowColor: "yellow",
        shadowOffset: {
            width:0,
            height:10,
        },
        shadowOpacity:0.23,
        shadowRadius:13.79,
        zIndex:1000,
        elevation: 21
        
    },

  cardIcons: {
    position: "absolute",
    display: "flex",
    backgroundColor: "black",
    height: "90%",
    top:50,
    width:"100%",
    justifyContent: "center",
    alignItems: "center"
  },

  icon1: {
    position: "absolute",
    top: "36%",
  },
  icon2: {
    top: "40%",
    left: '16%',

  },
  icon3: {
    top: '64%',
    left: '9%',

  },
  icon4: {
    top: "85%",
    left:"26%",
  },
  icon5: {
    top: "64%",
    right: "9%"
  },
  icon6: {
    top: "44%",
    right: "16%"
  },
  icon7: {
    top: "85%",
    right: "26%"
  },

  selectContainer: {
    height:150,
    width: "100%",
    backgroundColor: "F7F8FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:30,
    marginBottom:30,
  },

  selectText: {
    fontSize:18,
  },
  links: {
    top: 20,
    paddingBottom: 20,
    fontSize:18,
    paddingLeft:10,
    fontWeight: "bold"
  }

})

export default Choose;
