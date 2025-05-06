import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingcontainer}>
          <Text style={styles.hearderText}>
            Whst's new in Javascript 21 - ES21
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodycontainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quasi perferendis quas! Voluptates accusamus distinctio iure neque
            nihil nam minima laborum dolor non culpa facilis veniam rerum illum
            voluptatum in, aperiam incidunt tempore odit, eum ratione nostrum
            magni ullam. Incidunt adipisci dignissimos totam pariatur. Fugit
            veritatis sapiente saepe architecto ullam!
          </Text>
        </View>
        <View style={styles.footercontainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://hetratanpara.com/')}>
            <Text style={styles.socialLink}>Read More ..</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://hetratanpara.com/')}>
            <Text style={styles.socialLink}>Follow Me ..</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 380,
    height: 260,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingcontainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hearderText: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 100,
  },
  bodycontainer: {
    padding: 10,
  },
  footercontainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    backgroundColor: '#FF0000',
    fontSize: 16,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
