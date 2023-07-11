import React from 'react'
import { TouchableOpacity, StyleSheet,View, Dimensions } from 'react-native'
import { colors } from '../config/theme'
import StyledText from './StyledText'
import {MaterialCommunityIcons} from "@expo/vector-icons"

const SettingsButton = ({icon,label, isActive, ...props}) => {
    let activeColors = colors;
      
    return (
        <TouchableOpacity
          style={[
            {
                backgroundColor: activeColors.secondary,
            },
            styles.SettingsButton,
          ]}
          {...props}
       >
        <View style={styles.labelGroup}>
            <MaterialCommunityIcons name={icon} size={24} color={activeColors.tertiary} style={styles.icon}/>
        <StyledText style={[{color: activeColors.tertiary}, styles.label]}>{label}</StyledText>
        </View>

        <MaterialCommunityIcons name={isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={24} color={isActive ? activeColors.accent : activeColors.tertiary} />
       </TouchableOpacity>
    )
}

const height  = Dimensions.get('window').height;
const width  = Dimensions.get('window').width;



export default SettingsButton;

const styles = StyleSheet.create({
    SettingsButton: {
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
    },
    labelGroup: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginRight: 15
    }
})