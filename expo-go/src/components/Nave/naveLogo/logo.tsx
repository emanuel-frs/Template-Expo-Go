import { StyleSheet, Text, View, Image } from 'react-native';

export default function (){
    return(
        <View style={styles.expoGo}>
            <View style={styles.fundo}>
                <Image source={require('../../../assets/logoTemaDark.png')} style={styles.image}/>
            </View>
            <Text style={styles.texto}>Expo Go</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 20,
        height: 20
    },
    fundo:{
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D2228'
    },
    expoGo:{
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    texto:{
        color: '#CAD1D9',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 18,
        marginLeft: 10,
    },
})