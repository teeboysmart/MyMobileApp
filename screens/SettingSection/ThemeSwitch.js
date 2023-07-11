import { View, Text, StyleSheet } from "react-native";

const ThemeSwitch = () => {
    return (
        
        <View style={[styles.mainContainer,{width: "100%", marginTop: 80}]}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "white"}}>Theme switch</Text>
        <View style={styles.firstContainer}>
            <View style={styles.insideText}>
                <Text style={{fontSize: 18}}>Dark Mode</Text>
            </View>
             
        </View>
             
        </View>

       
    
    )
}
export default ThemeSwitch;

const styles = StyleSheet.create({
    mainContainer: {
        paddingLeft: 30,
        paddingRight: 30
     },
    firstContainer: {
       backgroundColor: "white",
       height: 60,
       width: "100%",
       borderRadius: 40,
       marginTop: 20
       
    },
    insideText: {
        flexDirection: "row" , 
        justifyContent: "space-between",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft:15,
        marginRight: 15,
       
    }
})