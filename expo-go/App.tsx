import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Footer from './src/components/Footer/foot';

export default function App() {
  const [activeTab, setActiveTab] = useState<'Home' | 'Settings'>('Home');

  function handleTabPress(tab: 'Home' | 'Settings') {
      setActiveTab(tab);
  }

  return (
      <View style={styles.container}>
          {activeTab === 'Home' && <Home />}
          {activeTab === 'Settings' && <Settings />}
          <Footer onTabPress={handleTabPress} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#0D1017'
  }
});
