import React,  {useState, useEffect} from 'react'
import {  StyleSheet, FlatList, View } from 'react-native';
import Article from '../Components/Articles';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import  {colors}  from './config/theme';
import { Dimensions } from 'react-native';
import axios from 'axios';





function NewsHomeScreen () {



  

  
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]
    
  const [results, setArticle] = useState([])

    //  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d663ba6a41c247cea0b40addc8d36a9c';

  const getNews = () => {
    axios.get('https://newsdata.io/api/1/news?apikey=pub_2574573e8e267ab7e3526f378cc7f4fadb13b&q=Soccer%20Sport ',
    {
        params: {
            category: 'sports',
            
        }
    }
    )
.then(function (response) {
// handle success
console.log(response.data.results);
setArticle(response.data.results) 
})
.catch(function (error) {
// handle error

console.log(error.response.data);
})
.finally(function () {
// always executed
});
  }
  useEffect(() => {
     getNews();
    // fetch(url)
    // .then(response => response.json())
    // .then(result =>console.log(result))
    // .then((json)=> setArticle(json))
    // .catch((error) => console.error(error))
  }, [])

 
    return (
        

      <View style={{height: "60%",}}>
          <FlatList
            horizontal={true}
            data={results}
            renderItem={({item}) => 
            <Article
              urlToImage = {item.image_url}
              title = {item.title}
              description = {item.description}
              author = {item.author}
              publishedAt = {item.pubDate}
              sourceName = {item.source_id}
              url = {item.url}
              content= {item.content}
            />
          } 
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 25,
            paddingTop: 25
          }}
          />
      </View>
        
          
    )
}
const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;

export default NewsHomeScreen;

const styles = StyleSheet.create({
    
})