import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function(){
    return(
        <TouchableOpacity style={[styles.qr, styles.principalPadrao]}>
            <MaterialCommunityIcons name='qrcode' size={22} color="#CAD1D9" />
            <Text style={styles.textinho}> Scan QR code</Text>  
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
    qr:{
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textinho:{
        fontSize: 17,
        color: '#CAD1D9',
    },
})