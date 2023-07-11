import React from 'react'
import MainContainer from '../Components/MainContainer'
import NewsHomeScreen from './NewsHomeScreen';
import { StyleSheet, Dimensions } from 'react-native';
import StyledText from './SettingSection/StyledText';
import ExploreFlatlist from './ExploreFlatlist';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext, useState, useEffect } from 'react';
import  {colors}  from './config/theme';
import axios from 'axios';
import Explore from '../Components/Explore';

function Home() {

  
 


  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

    return(
      <MainContainer style={{backgroundColor: activeColors.primary, width:width, height: height}}>
        <StyledText  style={{marginLeft: 20,color: activeColors.accent, marginTop: 5}} big>Trending</StyledText>
         <NewsHomeScreen />
         <StyledText style={{marginTop: 20, marginLeft: 20,color: activeColors.accent}} big>Explore</StyledText>
         <Explore/>
      </MainContainer>
    )
}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;



export default Home;

const styles = StyleSheet.create({
    
})