import { View, Text, StyleSheet } from "react-native";

const UserSection = () => {
    return (
        
        <View style={[styles.mainContainer,{width: "100%"}]}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "white", marginTop: 10}}>User</Text>
        <View style={styles.firstContainer}>
            <View style={styles.insideText}>
                <Text style={{fontSize: 18}}>Name</Text>
                <Text style={{fontSize: 18}}>Olamide</Text>
            </View>

            <View style={styles.secondContainer}>
            <View style={styles.insideText}>
                <Text style={{fontSize: 18}}>Joined on</Text>
                <Text style={{fontSize: 18}}>17/04/2022</Text>
            </View>
             
        </View>
             
        </View>
        </View>

       
    
    )
}
export default UserSection;

const styles = StyleSheet.create({

    mainContainer: {
       paddingLeft: 30,
       paddingRight: 30
    },

    firstContainer: {
       backgroundColor: "white",
       height: 60,
       width: "100%",
       borderTopLeftRadius: 40,
       borderTopRightRadius: 40,
       marginTop: 15
       
    },
    secondContainer: {
        backgroundColor: "white",
        height: 60,
        width: "100%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginTop: 24
        
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