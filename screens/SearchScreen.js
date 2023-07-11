import React, { useState } from 'react'
import {View ,  StyleSheet, FlatList} from 'react-native';
import SearchBar from '../Components/SearchBar';
import Article from '../Components/Articles';
import axios from 'axios';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import  {colors}  from './config/theme';
import "expo-dev-client"


const SearchScreen = () => {

  
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

  
    const [searchText, setSearchText] = useState("")
    const [articles, setArticles] = useState([])
    
    const searchArticle = () => {
        axios.get('https://newsdata.io/api/1/news?apikey=pub_2574573e8e267ab7e3526f378cc7f4fadb13b&q=Soccer%20Sport',
        {
            params: {
                category: 'sports',
                q: searchText
            }
        }
        )
  .then(function (response) {
    // handle success
    console.log(response.data.articles);
     setArticles(response.data.articles)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }

    return (
        <View style={[styles.container, {backgroundColor:activeColors.primary}]}>
           <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticle}/>

         <View >
         <FlatList
              data={articles}
              renderItem={({item}) => 
              <Article
                urlToImage = {item.image_url}
                title = {item.title}
                description = {item.description}
                author = {item.author}
                publishedAt = {item.pubDate}
                sourceName = {item.source_id}
                content={item.content}
              />
            } 
            keyExtractor={(item) => item.title}
           />
         </View>
        </View>
    )
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        
    },
   
})