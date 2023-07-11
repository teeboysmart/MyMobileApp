import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingPage from './SettingPage';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { colors } from './config/theme';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import SearchScreen from './SearchScreen';
import Home from './Home';




function ChooseNav(navigation) {
   const { theme } = useContext(ThemeContext)
   let activeColors = colors[theme.mode]
 
   
    const Tab = createBottomTabNavigator();
   
    return (
     
      <Tab.Navigator
        screenOptions={({ route }) => ({
         tabBarIcon: ({  color, size }) => {
           let iconName;

           if (route.name === 'Trending') {
             iconName = "trending-up"
           } else if (route.name === 'Search') {
             iconName = "cog";
           }  else if (route.name === 'Settings') {
            iconName = "cog";
          }

           // You can return any component that you like here!
           return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: activeColors.accent,
         tabBarInactiveTintColor: activeColors.tertiary,
         tabBarStyle:{
            backgroundColor: activeColors.secondary,
         },
         tabBarShowLabel: false,
         headerStyle: {
            backgroundColor: activeColors.secondary,
         },
         headerTintColor: activeColors.tint
       })}
         >
         <Tab.Screen name='Trending' component={Home} 
           
         />
         <Tab.Screen name='Search' component={SearchScreen}
         />
          <Tab.Screen name='Settings' component={SettingPage}
         />
      </Tab.Navigator>
        
    
    );
}

export default ChooseNav;