import React, { useState } from 'react'
import { View, StyleSheet, Dimensions} from 'react-native'
import { Switch } from 'react-native';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import StyledText from './SettingSection/StyledText';
import SettingsItem from './SettingSection/SettingsItem';
import SettingsButton from './SettingSection/SettingsButton';
import { colors } from './config/theme';


const SettingPage = () => {
    const { theme,updateTheme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

    const [isActive, setIsActive] = useState(false);
    const handleSwitch = () => {
        updateTheme();
        setIsActive((previousState) => !previousState)
    };

    // const { theme, updateTheme } = useContext(ThemeContext)
    // let activeColors = colors[theme.mode]

    // const [isActive, setIsActive] = useState(theme.mode === "dark")
    // const handleSwitch = () =>  {
    //     updateTheme();
    //     setIsActive((previousState) => !previousState)
    // }
  

    return (
        // <SafeAreaView style={[styles.container, {backgroundColor: activeColors.primary}]}>
        //     <UserSection/>
        //     <ThemeSwitch/>
        //     <Switch style={styles.Switch}
        //      value={isActive}
        //      onValueChange={handleSwitch}
        //      thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
        //      ios_backgroundColor={activeColors.primary}
        //      trackColor={{
        //         false: activeColors.primary,
        //         true: activeColors.tertiary
        //      }}
        //     />
        //    <ThemeSetting isActive={false}/>
        //    <ThemeSetting2 />
        //    <ThemeSetting3 />
          
        // </SafeAreaView>
         <View style={[styles.container, {backgroundColor: activeColors.primary}]}>
            <StyledText
              style={{color: activeColors.accent, marginTop: height * -0.020}}
            >User</StyledText>

            <View
             style={[
                styles.section
             ]} 
            >
                <SettingsItem label="Name">
                    <StyledText>
                        Richard Barnes
                    </StyledText>
                </SettingsItem>

                <SettingsItem label="Joined on">
                    <StyledText>
                        07 / 10 / 22
                    </StyledText>
                </SettingsItem>

            </View>

            <StyledText
              style={{color: activeColors.accent}}
            >Theme Switch</StyledText>

            <View
             style={[
                styles.section
             ]} 
            >
                <SettingsItem label="Dark Mode">
                  
            <Switch style={styles.Switch}
             value={isActive}
             onValueChange={handleSwitch}
             thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
             ios_backgroundColor={activeColors.primary}
             trackColor={{
                false: activeColors.primary,
                true: activeColors.tertiary
             }}
            />
                   
                </SettingsItem>
           </View>

           <StyledText
              style={{color: activeColors.accent}}
            >Theme Settings</StyledText>

            <View style={styles.section}>
           
                    <SettingsButton label="Light" icon="lightbulb-on" isActive={theme.mode === "light" && !theme.system} onPress={() => updateTheme({mode: "light"})}/>
                    <SettingsButton label="Dark" icon="weather-night" isActive={theme.mode === "dark" && !theme.system} onPress={() => updateTheme({mode: "dark"})}/>
                    <SettingsButton label="System" icon="theme-light-dark" isActive={theme.system} onPress={() => updateTheme({system: true})}/>
        
           </View>
         </View>

    )

}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;




export default SettingPage;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        width: width,
        height: height
    },
   section: {
       borderRadius: 30,
       overflow: "hidden",
       marginTop: 25,
       marginBottom: 25,
   }
   
})
