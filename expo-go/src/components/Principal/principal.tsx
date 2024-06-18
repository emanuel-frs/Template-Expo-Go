import { StyleSheet, View } from 'react-native';
import Press from './pincipalPress/press';
import Enter from './principalEnter/enter';
import Code from './principalQr/code';

export default function(){
    return(
        <View style={styles.containerCode}>
            <Press/>
            <Enter/>
            <Code/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCode:{
        flex: 1,
        padding: 20
    },
})