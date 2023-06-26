import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

const ProfilePage = () => {
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState("I'm a web developer");

  const handleSave = () => {
    // You can send the updated information to the server here
    // For this example, we're only updating the state values
    // You can replace this with your own logic to update the data

    // Update the name and bio with the input values
    setName(nameInput);
    setBio(bioInput);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('./assets/16.png')}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>{name}</Text>
      <Text style={{ fontSize: 16, marginVertical: 8 }}>{bio}</Text>

      <View style={{ marginTop: 32 }}>
        <Text>Edit Profile</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 8 }}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginVertical: 8 }}
          value={bio}
          onChangeText={text => setBio(text)}
          multiline
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default ProfilePage;
