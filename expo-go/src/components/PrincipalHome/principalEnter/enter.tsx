import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function(){
    return(
        <TouchableOpacity style={[styles.enter, styles.principalPadrao]}>
            <Ionicons name="chevron-forward-sharp" size={15} color="#CAD1D9" />
            <Text style={styles.textinho}> Enter URL manually</Text>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    principalPadrao:{
        width: '100%',
        padding: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#434750',
        backgroundColor: '#161B21',
    },
    enter:{
        borderTopWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textinho:{
        fontSize: 17,
        color: '#CAD1D9',
    },
})