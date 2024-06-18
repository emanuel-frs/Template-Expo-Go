import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function(){
    return(
        <TouchableOpacity>
            <MaterialIcons name='settings' size={35} color="#8B929A"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    home:{
        color: '#A397E9',
        marginTop: -3
    },
})