import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function(){
    return(
        <View>
                <View style={styles.treco}>
                    <View style={styles.outraDiv}>
                        <Text style={styles.development}>Theme</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.press, styles.principalPadrao]}>
                    <View style={styles.dark}>
                        <Ionicons name="moon" size={20} color="#CAD1D9" />
                        <Text style={styles.textinho}>Dark</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="circle-slice-8" size={20} color="#CAD1D9" />
                    </View>
                </TouchableOpacity>
                <View style={styles.treco2}>
                    <View style={styles.outraDiv}>
                        <Text style={styles.development}>Se você é programador só precisa desta opção</Text>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    principalPadrao:{
        width: '100%',
        padding: 17,
        borderWidth: 1,
        borderColor: '#434750',
        backgroundColor: '#1D2228',
        justifyContent: 'space-between'
    },
    treco:{
        padding:10,
        paddingTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    treco2:{
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    outraDiv:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    develop:{
        width: 18,
        height: 18,
        borderRadius: 2
    },
    development:{
        color: '#8B929A',
        fontWeight: '600',
    },
    help:{
        color: '#8B929A',
        fontSize: 12
    },
    textinho:{
        fontSize: 17,
        color: '#CAD1D9',
        marginLeft: 15,
    },
    press:{
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dark:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})