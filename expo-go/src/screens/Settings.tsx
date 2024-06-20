import { StyleSheet, View } from "react-native";
import Nave from "../components/NaveSett/naveSett";
import Principal from "../components/PrincipalSett/principalSett";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Nave/>
            <Principal/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010101'
    }
});
