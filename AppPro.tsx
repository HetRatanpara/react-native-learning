import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

function AppPro() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello Het Ratanpara
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center', // that work (left -right)
    justifyContent: 'center', // centers content vertically (Work Top to Bottom)
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 28,
  },
  darkText: {
    color: '#000000',
    fontSize: 28,
  },
});

export default AppPro;
