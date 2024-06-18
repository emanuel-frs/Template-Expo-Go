import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function(){
    return(
        <View>
                <View style={styles.treco}>
                    <View style={styles.outraDiv}>
                    <Image source={require('../../../assets/development.png')} style={styles.develop}/>
                    <Text style={styles.development}>Development servers</Text>
                    </View>
                    <Text style={styles.help}>HELP</Text>
                </View>
                <TouchableOpacity style={[styles.press, styles.principalPadrao]}>
                    <Text style={styles.textinho}>Press here to sign to your Expo account and see the projects you have recently been working on.</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    principalPadrao:{
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#434750',
        backgroundColor: '#161B21',
    },
    treco:{
        padding:20,
        backgroundColor: '#0D1017',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        marginLeft: 10,
        fontWeight: '600',
    },
    help:{
        color: '#8B929A',
    },
    textinho:{
        fontSize: 17,
        color: '#CAD1D9',
    },
    press:{
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    }
})