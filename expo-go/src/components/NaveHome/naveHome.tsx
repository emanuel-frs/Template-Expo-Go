import { StyleSheet, View } from 'react-native';
import Logo from './naveLogo/logo';
import Login from './naveLogin/login';

export default function (){
    return(
        <View style={[styles.top,styles.formatoPadrao]}>
            <View style={styles.div}>
                <Logo/>
                <Login/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formatoPadrao:{
        width: '100%',
        backgroundColor: '#161B21',
        borderColor: '#434750'
    },
    top:{
        height: 105,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 0.2,
        paddingTop: 50,
        padding: 20,
    },
    div:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})