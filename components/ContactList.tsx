import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Test 1',
      status: 'Offline',
      imageUrl:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746527213~exp=1746530813~hmac=28f1602e2dda219d40cfc9f16644449a37df407867ebec43baad9bf90031ce92',
    },
    {
      uid: 2,
      name: 'Test 2',
      status: 'Online',
      imageUrl:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746527213~exp=1746530813~hmac=28f1602e2dda219d40cfc9f16644449a37df407867ebec43baad9bf90031ce92',
    },
    {
      uid: 3,
      name: 'Test 3',
      status: 'Offline',
      imageUrl:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746527213~exp=1746530813~hmac=28f1602e2dda219d40cfc9f16644449a37df407867ebec43baad9bf90031ce92',
    },
    {
      uid: 4,
      name: 'Test 4',
      status: 'Online',
      imageUrl:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746527213~exp=1746530813~hmac=28f1602e2dda219d40cfc9f16644449a37df407867ebec43baad9bf90031ce92',
    },
    {
      uid: 5,
      name: 'Test 5',
      status: 'Online',
      imageUrl:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746527213~exp=1746530813~hmac=28f1602e2dda219d40cfc9f16644449a37df407867ebec43baad9bf90031ce92',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#ADD8E6',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
