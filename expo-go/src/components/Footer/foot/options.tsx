import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function(){
    const [homeApertado, setHomeApertado] = useState(true);
    const [settingApertado, setSettingApertado] = useState(false);

    function homePressionado(){
        setHomeApertado(true);
        setSettingApertado(false);
    }

    function settingsPressionado(){
        setSettingApertado(true);
        setHomeApertado(false);
    }

    return(
        <>
            <TouchableOpacity onPress={homePressionado} style={styles.sett}>
                <MaterialCommunityIcons name='home-variant' size={30} color={homeApertado ? "#A397E9" : "#CAD1D9"}/>
                {homeApertado && <Text style={styles.nome}>Home</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={settingsPressionado} style={styles.sett}>
                <MaterialIcons name='settings' size={30} color={settingApertado ? "#A397E9" : "#CAD1D9"}/>
                {settingApertado && <Text style={styles.nome}>Settings</Text>}
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    nome:{
        color: '#A397E9',
        fontSize: 12,
        marginTop: -3
    },
    sett:{
        height: '100%',
        width:160,
        alignItems: 'center',
        justifyContent: 'center'
    }
})