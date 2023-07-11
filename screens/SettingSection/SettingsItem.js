import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { colors } from '../config/theme'
import StyledText from './StyledText'

const SettingsItem = ({children,label,}) => {
    let activeColors = colors;
      
    return (
        <View
          style={[
            {
                backgroundColor: activeColors.secondary,
            },
            styles.settingsItem,
          ]}
       >
        <StyledText style={[{color: activeColors.tertiary}, styles.label]}>{label}</StyledText>
       {children}
       </View>
    )
}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;



export default SettingsItem;

const styles = StyleSheet.create({
    settingsItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        height: height * 0.08,
        paddingHorizontal: 25,
        marginBottom: 2
    },
    label: {
      fontStyle:"italic"
    }
})