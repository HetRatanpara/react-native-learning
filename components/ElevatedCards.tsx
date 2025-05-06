import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView style={styles.container} horizontal={true}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Card 1</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Card 2</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Card 3</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Card 4</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Card 5</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Card 6</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#287FF0',
  },
});

// Demo of how the padding work see that example and easly understand how it's work
{
  /* <View style={{paddingVertical: 8, backgroundColor: 'blue'}}>
          <Text style={{backgroundColor: 'green'}}>Hello, World!</Text>
        </View> */
}
