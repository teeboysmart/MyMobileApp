import AllAppRoot from "./screens/AllAppRoot";
import { useState, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Appearance } from "react-native";
import { storeData , getData} from "./screens/config/AsyncStorage";
import * as SplashScreen from "expo-splash-screen";
import Welcome from "./WelcomeSection/welcome";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

// keep SplashScreen  visible  while we fetch the resources
SplashScreen.preventAutoHideAsync();

export default function App() {
   const [theme, setTheme] = useState({mode: "dark"});

   const updateTheme = (newTheme) => {
        let mode;
        if (!newTheme) {
          mode = theme.mode === "dark" ? "light" : "dark"
          newTheme = {mode, system: false}
        } else {
          if (newTheme.system) {
            const systemColorScheme = Appearance.getColorScheme();
            mode = systemColorScheme === "dark" ? "dark" : "light",
            newTheme = {...newTheme, mode}
          } else {
            newTheme = {...newTheme, system: false}
          }
        }
        setTheme(newTheme)
        storeData("newsFeedTheme", newTheme)
   };
  //  monitor system for theme changes
  if (theme.system) {
    Appearance.addChangeListener(({colorScheme}) => {
        updateTheme({system:true, mode: colorScheme})
    })
  }

  const fetchStoredTheme = async () => {
        try {
           const themeData = await getData("newsFeedTheme")
           if (themeData) {
            updateTheme(themeData);
           }
        } catch (message) {
          alert(message)
        }finally { 
          await setTimeout(() => SplashScreen.hideAsync(), 1000)
          
        }
  }

  useEffect(() => {
    fetchStoredTheme();
  },  [])

  const handleDone = () => {
    setIsfirstTimeLoad(false)
    AsyncStorage.setItem('isFirstTimeOpen', "no")
    
  }

  const [loading, setLoading] = useState(true)
  const [isFirstTimeLoad, setIsfirstTimeLoad] = useState(false)

  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem('isFirstTimeOpen')
    if(result === null) setIsfirstTimeLoad(true)
    setLoading(false)
  }

   useEffect(() => {
    checkForFirstTimeLoaded();
   }, [])



  const Slide = [
    {
        key: 1,
        title: 'Welcome One',
        desc: "Welcome Screen one description",
        backgroundColor: "red"
    },
    
    {
        key: 2,
        title: 'Get ahead of the game in only minutes      a day',
        desc: "Best sport articles",
        backgroundColor: "blue"
    },
    {
        key: 3,
        title: 'Stay Informed!',
        desc: "Fact-Checking features to ensure all sport articles reliable and verifiable",
        backgroundColor: "green"
    }
 ]

 if(loading) return null

 if(isFirstTimeLoad) return(
     <>
         <StatusBar hidden/>
       <Welcome onDone={handleDone} Slide={Slide}/>
     </>
   
  )

  if(!isFirstTimeLoad) return (
    <ThemeContext.Provider  value={{theme, updateTheme}}>
    <AllAppRoot/>
    </ThemeContext.Provider>

  )
}