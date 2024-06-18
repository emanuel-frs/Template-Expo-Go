import { StyleSheet, View } from 'react-native';
import Home from './footSetting/home';
import Setting from './footHome/setting';

export default function(){
    return(
        <View style={[styles.footer, styles.formatoPadrao]}>
            <Home/>
            <Setting/>
        </View>
    )
}

const styles = StyleSheet.create({
    formatoPadrao:{
        width: '100%',
        backgroundColor: '#161B21',
        borderColor: '#434750'
    },
    footer:{
        padding: 6,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 95
    },
})