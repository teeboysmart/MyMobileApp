import React from 'react'
import {useFonts} from 'expo-font'
import { NavigationContainer  } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './StartinPage';
import { colors } from './config/theme';
import ChooseNav from './ChooseNav';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import FullgistPage from './FullgistPage';
import ExploreFlatlist from './ExploreFlatlist';
import ExploreFlatItem from '../Components/ExploreFlatItems';
import Spain from '../Components/Spain';
import Germany from '../Components/Germany';
import Italy from '../Components/Italy';
import France from '../Components/france';



// const theme = {
//   ...DefaultTheme ,
//   colors: {
//     ...DefaultTheme.colors,
//     border: "transparent"
//   }
// }



const Stack = createStackNavigator();



function AllAppRoot(navigation) {
  
   
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

    
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
      <NavigationContainer>
         {
          <Stack.Navigator>
            <Stack.Screen  name='Home' component={Home} options={{headerShown:false,  tabBarStyle: {
               backgroundColor: activeColors.primary
            }}}        />
            <Stack.Screen  name='ChooseNav' component={ChooseNav} options={{headerShown:false}}  />
            <Stack.Screen  name='FullgistPage' component={FullgistPage} options={{headerShown:false}}  />
            <Stack.Screen  name='Trending From England' component={ExploreFlatlist} options={{headerShown:true, tabBarStyle: {
               backgroundColor: 'red'}}}  />
             <Stack.Screen  name='Trending From Spain' component={Spain} options={{headerShown:true, tabBarStyle: {
               backgroundColor: 'red'}}}  />
              <Stack.Screen  name='Trending From Germany' component={Germany} options={{headerShown:true, tabBarStyle: {
               backgroundColor: 'red'}}}  />
              <Stack.Screen  name='Trending From Italy' component={Italy} options={{headerShown:true, tabBarStyle: {
               backgroundColor: 'red'}}}  />
              <Stack.Screen  name='Trending From France' component={France} options={{headerShown:true, tabBarStyle: {
               backgroundColor: 'red'}}}  />
               
              
            
           
           
          </Stack.Navigator>
        }        
      </NavigationContainer>

      
     );
}

export default AllAppRoot;