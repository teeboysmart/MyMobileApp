import moment from 'moment';
import React from 'react'
import { StyleSheet, Image, Pressable, ScrollView,TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native';
import StyledText from '../screens/SettingSection/StyledText';
import { colors } from '../screens/config/theme';
import { useNavigation } from '@react-navigation/native'


const Explore = (props) => {
    const navigation = useNavigation();

     let  activeColors = colors

 

    return (
    <ScrollView  style={styles.container} horizontal={true}  showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.touchable} onPress={() => {
            navigation.navigate('Trending From England')
          }} >
            <Image source={require('../assets/images/EnglandCup.jpg')} style={[styles.image, StyleSheet.absoluteFill]} />

           
            <StyledText  style={styles.title}>source</StyledText>

       </TouchableOpacity>

       <TouchableOpacity style={styles.touchable} onPress={() => {
            navigation.navigate('Trending From Spain')}}>
            <Image source={require('../assets/images/SpainCUp.jpg')} style={[styles.image2, StyleSheet.absoluteFill]}/>

           
            <StyledText  style={styles.title}>source</StyledText>

       </TouchableOpacity>

       <TouchableOpacity style={styles.touchable} onPress={() => {
            navigation.navigate('Trending From Germany')}}>
            <Image source={require('../assets/images/GermanyCup.jpg')} style={[styles.image2, StyleSheet.absoluteFill]}/>

           
            <StyledText  style={styles.title}>source</StyledText>

       </TouchableOpacity>

       <TouchableOpacity style={styles.touchable} onPress={() => {
            navigation.navigate('Trending From Italy')}}>
            <Image source={require('../assets/images/italyCup.jpg')} style={[styles.image2, StyleSheet.absoluteFill]}/>

           
            <StyledText  style={styles.title}>source</StyledText>

       </TouchableOpacity>

       <TouchableOpacity style={styles.touchable} onPress={() => {
        navigation.navigate('Trending From France')
       }}>
            <Image source={require('../assets/images/FranceCup.jpg')} style={[styles.image2, StyleSheet.absoluteFill]}/>

           
            <StyledText  style={styles.title}>source</StyledText>

       </TouchableOpacity>
   
 
 
 
 
            
        </ScrollView>
    )
   
}

const width  = Dimensions.get('window').width;



export default Explore;

const styles = StyleSheet.create({
    container:{
        width: width,
        height: 130,
        borderRadius: 60, 
        marginLeft: 10,
        marginTop: 12,
      
        
        
    },
    title: {
       fontSize:  19,
       color: colors.primary,
       fontWeight: "bold",
       height: "100%",
       width: "100%",
       textAlignVertical: "center",
       textAlign: "center",
    
       borderRadius: 60,
       marginTop: 40
       
      
    },
    touchable: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginLeft: 10
       
    },
     image: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: colors.accent
        
    },

    image2: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: colors.accent,
  
        
        
    }
})
