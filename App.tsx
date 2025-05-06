import React from 'react';

import {View, Text, SafeAreaView, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Text>Hello World !</Text>
        <Button title="Test Button" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

export default App;
