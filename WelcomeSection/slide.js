import React from 'react'
import { useFonts } from 'expo-font';
import { View, StyleSheet, FlatList, Text, Dimensions, Image, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const Slides = ({item}) => {
  
    const {title, desc, backgroundColor, key} = item

    const [loaded] = useFonts({
      "Roboto-Black" : require('../assets/fonts/Roboto-Black.ttf'),
      "Roboto-BlackItalic" : require('../assets/fonts/Roboto-BlackItalic.ttf'),
      "Roboto-Italic" : require('../assets/fonts/Roboto-Italic.ttf'),
      "Roboto-Light" : require('../assets/fonts/Roboto-Light.ttf')
     })
  
     if(!loaded) {
      return null;
     }
       

  
         if (key === 1) {

          return (
           <ImageBackground source={require('../assets/images/pitch2.jpg')} style={{width, height, alignItems: 'center', }}>
            <Text style={{color: '#223', fontSize: 30, fontWeight: 'bold', marginTop: height * 0.6,  fontFamily: 'Roboto-BlackItalic'}}>Welcome To Sport World</Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#FFA276', fontSize: 40, fontWeight: 'bold', marginTop: 30,  fontFamily: 'Roboto-BlackItalic'}}>Stay updated!</Text>
            <Image source={require('../assets/images/thumb.png')} style={{width: 30, height: 30, alignSelf: 'center', marginTop:15,}}/>
            </View>
           </ImageBackground>
          )

         } else if (key === 2) {
          return (
            <LinearGradient colors={[ '#000', '#006']} style={{width:width, alignItems: 'center', padding: 4}}>
             <Text style={styles.Text1}>{title}</Text>
              <Image source={require('../assets/images/RoundFootball.jpg')} style={{height: 200, width: 200, borderRadius: 100, borderWidth: 2,marginTop: height * 0.05}}/>
              <Text style={[styles.Text1, {marginTop: 10}]}>{desc}</Text>
            </LinearGradient>
  
          )
         }  else {
          return (
            <LinearGradient colors={[ '#000', '#056']} style={{width:width, alignItems: 'center', padding: 4}}>
            <Text style={styles.Text1}>{title}</Text>
             <Image source={require('../assets/images/cup.jpg')} style={{height: 200, width: '80%', borderRadius: 100, borderWidth: 2,marginTop: height * 0.05}}/>
             <Text style={[styles.Text1, {marginTop: 10}]}>{desc}</Text>
           </LinearGradient>
          )
         }
      
        
}

  const {width, height} = Dimensions.get('screen')

export default Slides;

const styles = StyleSheet.create({
  Slide: {
     width,
     height,
     justifyContent: "center",
     alignItems: "center"
  },
  Text1:{
    color: "#fff",
    fontSize: 50,
    textAlign: 'center',
    fontWeight: "bold"
    
    
  }
})