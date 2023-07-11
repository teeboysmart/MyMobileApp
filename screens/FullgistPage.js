
import  {colors}  from './config/theme';
import moment from 'moment';
import React , {useState, useEffect} from 'react'
import { View, StyleSheet, Text,  Image, Pressable , ScrollView } from 'react-native'
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native'

import MainContainer from '../Components/MainContainer';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import StyledText from './SettingSection/StyledText';





function FullgistPage() {
  
   
  // const {urlToImage, title, description, sourceName, publishedAt, author} = route?.params;
  const route = useRoute();
    
       
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]
    
   
     

    return(
      <MainContainer style={{backgroundColor: activeColors.secondary}}>
               
        <Image source={{uri: route.params.urlToImage }} style={styles.image}/>

        <View style={[{backgroundColor: activeColors.secondary},styles.bottomsection]}>
           <StyledText
           big style={[{color: activeColors.tertiary},styles.title]}
           
           >
              {route.params.title}
           </StyledText>

           <View style={styles.authorRow}>
              <View style={styles.author}>
                 <Image source={{uri: route.params.urlToImage}} style={styles.avatar}/>
                 <StyledText
                 numberOfLines={2}
                 bold
                 style={{color: activeColors.tertiary}}
                 >
                    {route.params.author}
                 </StyledText>
              </View>

              <StyledText
              style={[{color: activeColors.tertiary}, styles.date]}
              small
              >
              

                 {moment(route.params.publishedAt).format("MMM DD YY")}

              </StyledText>
           </View>

           <StyledText
              style={[{color: activeColors.tertiary}, styles.content]}
                
              >
                 {route.params.content}
              </StyledText>


         </View>
      </MainContainer>
    )
}

export default FullgistPage;

const styles = StyleSheet.create({
  title: {
     marginBottom: 20
  },

  bottomsection: {
    padding: 25,
    top: -30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },

  authorRow: {
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 25
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    flex: 3
  },
  image: {
      height: 300,
      width:"100%",
      
  },
  content: {
    marginTop: 15,
    textAlign: 'justify',
    lineHeight: 30

  }
})
