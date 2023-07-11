import React,  {useState, useEffect} from 'react'
import {  StyleSheet,  FlatList, View, Image, Text } from 'react-native';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import  {colors}  from './config/theme';
import { Dimensions } from 'react-native';
import ExploreFlatItem from '../Components/ExploreFlatItems';
import { SafeAreaView } from 'react-navigation';




function ExploreFlatlist () {



  

  
    const [articles, setArticle] = useState([])

      const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d663ba6a41c247cea0b40addc8d36a9c',
        {
            params: {
                category: 'sports'
            }
        }
        )
  .then(function (response) {
    // handle success
    console.log(response.data.articles);
     setArticle(response.data.articles)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
      }
      useEffect(() => {
         getNews();
      }, [])

      const { theme } = useContext(ThemeContext)
      let activeColors = colors[theme.mode]
   
      const height  = Dimensions.get('window').height;
      const width  = Dimensions.get('window').width;

      


    return (

   
      <View style={{flex: 1,  paddingRight: 3,paddingLeft: 3, backgroundColor: activeColors.primary}}>
          <Image source={require('../assets/images/liverpool.jpg')} style={{height:'40%', width: width}}/>
          <View style={{width:width, height: 60, justifyContent: "center", alignItems: "center", backgroundColor: "#000",opacity: .8,borderRadius: 2}}><Text style={{fontSize:  19, fontWeight: 'bold', color: activeColors.accent}}>Topping Headlines Today</Text></View>
      <FlatList
      data={articles}
      renderItem={({item}) => 
      <ExploreFlatItem
        urlToImage = {item.urlToImage}
        title = {item.title}
        description = {item.description}
        author = {item.author}
        publishedAt = {item.publishedAt}
        sourceName = {item.source.name}
        url = {item.url}
        
      />
    } 
    keyExtractor={(item) => item.title}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingLeft: 5,
      paddingTop: 5,
      paddingRight: 5
    }}
    />

      </View>
    )
  }
    export default ExploreFlatlist;

const styles = StyleSheet.create({
    
})