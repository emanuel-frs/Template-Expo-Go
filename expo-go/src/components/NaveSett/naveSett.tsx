import { StyleSheet, View, Text } from 'react-native';

export default function (){
    return(
        <View style={[styles.top,styles.formatoPadrao]}>
            <View style={styles.div}>
                <Text style={styles.sett}>Setting</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formatoPadrao:{
        width: '100%',
        backgroundColor: '#1D2228',
        borderColor: '#434750'
    },
    top:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 0.2,
        paddingTop: 50,
        paddingBottom: 15,
        padding: 20,
    },
    div:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sett:{
        fontSize: 23,
        fontWeight: '400',
        color: '#CAD1D9'
    }
})