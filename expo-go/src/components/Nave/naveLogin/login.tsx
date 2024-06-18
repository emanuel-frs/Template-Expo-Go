import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function (){
    return(
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.login}>Log in</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    login:{
        color: '#CAD1D9',
    },
    botao:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#8B929A',
        borderRadius: 5,
    },
})