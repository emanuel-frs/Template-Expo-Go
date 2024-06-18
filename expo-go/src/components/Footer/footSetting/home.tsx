import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function(){
    return(
        <TouchableOpacity>
            <MaterialCommunityIcons name='home-variant' size={35} color="#A397E9"/>
            <Text style={styles.home}>Home</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    home:{
        color: '#A397E9',
        marginTop: -3
    },
})