import { StyleSheet, View } from 'react-native';
import Nave from '../components/NaveHome/naveHome';
import Principal from '../components/PrincipalHome/principalHome';

export default function Home() {
    return (
        <View style={styles.container}>
            <Nave/>
            <Principal/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1017'
    }
});
