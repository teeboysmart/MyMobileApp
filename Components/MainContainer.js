import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { colors } from "../screens/config/theme";
import { StatusBar } from "react-native";

const MainContainer = ({children, style, ...props}) => {
    let activeColors = colors;

    return(
        <SafeAreaView style={Styles.container}>
            <ScrollView
             style={[
                {
                backgroundColor: activeColors.primary,
                },
                style,
             ]}
             {...props}
            >
             {children}
             <StatusBar style="auto"/>
            </ScrollView>

        </SafeAreaView>
    )

}
export default MainContainer;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})