import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Nave from './src/components/Nave/nave';
import Foot from './src/components/Footer/foot';
import Principal from './src/components/Principal/principal';

export default function App() {
  return (
    <View style={styles.container}>
      <Nave/>
      <Principal/>
      <Foot/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1017'
  }
});
