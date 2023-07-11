import React , {useState , useEffect} from 'react'
import  Button  from 'react-native-flat-button';
import { View, Text, SafeAreaView, TouchableOpacity, Image,StyleSheet, Dimensions, ImageBackground } from 'react-native';
import {useFonts} from 'expo-font'
import  {colors}  from './config/theme';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import StyledText from './SettingSection/StyledText';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




function StartingPage({navigation}) {


  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

      
           
      

       return (
<ImageBackground source={require('../assets/images/Stadium.jpg')} style={styles.container}>
    <LinearGradient colors={[ '#0006', '#000']} style={{height: height, width: width, alignItems: 'center',justifyContent: 'center'}}>
  
         <View style={{marginTop: height * 0.58, marginLeft: width * 0.0}}>
             <StyledText big style={{color: activeColors.accent, fontSize: 30}}>Welcome to sport world</StyledText>
             <StyledText style={{color: activeColors.tertiary, fontSize: 16}}>Get an updated upcoming live news while being active</StyledText>
             <StyledText style={{color: activeColors.tertiary, fontSize: 16}}>Here on the sport world and sport tips of the day.</StyledText>
       </View>

     
        <Button 
          type="custom"
          containerStyle={styles.buttonContainer3}
          borderRadius={2}
          borderColor = {'#4167b2'}
          backgroundColor={'#4167b2'}
          contentStyle={styles.content}
          

          onPress = {() => {
            navigation.navigate('ChooseNav')
          }}
          >LET'S GET STARTED</Button>

          
            <View  style={{marginTop:height * 0.007}}>
          <StyledText bold style={[styles.agree,{color: activeColors.tertiary}]}>by continuing you agreed to footy</StyledText>
         
         </View>

          <View style={{flex: 1, flexDirection: 'row', marginTop:height * 0.007, marginLeft: width * 0.04 , }}>
          <TouchableOpacity><StyledText bold style={{color: activeColors.tertiary, textDecorationLine:'underline', }}>Terms of service</StyledText></TouchableOpacity>
          <StyledText style={{marginLeft: 10, color: activeColors.tertiary,}}>and</StyledText>
          <TouchableOpacity><StyledText bold style={{marginLeft: 10, color: activeColors.tertiary, textDecorationLine:'underline', }}>Privacy Policy</StyledText></TouchableOpacity>
          </View>

     </LinearGradient>
  
</ImageBackground>
       )}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  login : {
    marginTop: 30,
    marginBottom: 10,
    textDecorationLine:'underline', 
    marginLeft: width * 0.04
  },
  agree: {
    marginLeft: width * 0.04,
  },

  myView: {
    width: width * 0.8, // 80% of screen's width
    height: height * 0.2 // 20% of screen's height
},

 

  buttonContainer3: {
    width:width * 0.8,
    height:height * 0.07,
    backgroundColor:'#4167b2',
    marginLeft: 45,
    marginTop: 10,
    borderRadius:4,
    marginLeft:width * 0.01,
    marginTop: 100
  },
  content: {
    fontSize:18
  }
})


export default StartingPage;