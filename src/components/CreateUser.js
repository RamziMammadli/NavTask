import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const CreateUser = () => {
  const [name, setname] = useState('');
  const [title, settitle] = useState('');

  const addUser = () => {
    const user = {
      name: name,
      jobTitle: title,
    };
    
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'Application/json',
      },
    })
      .then(res => {
        if (res.ok == true) {
          return res.json();
        } else {
          throw {
            status: res.status,
            message: 'Error',
          };
        }
      })
      .then(data => {
        console.log(data);
      })
  };

  return (
    <View style={{paddingHorizontal: 15, paddingVertical: 25}}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setname}
        style={{fontSize: 22, borderBottomWidth: 1, borderRadius: 5}}
      />
      <TextInput
        placeholder="Job Title"
        value={title}
        onChangeText={settitle}
        style={{fontSize: 22, borderBottomWidth: 1, borderRadius: 5}}
      />
      <Button title="Create" onPress={() => addUser()} />
    </View>
  );
};

export default CreateUser;

const styles = StyleSheet.create({});
